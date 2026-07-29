import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, plotSize, source, date } = body;

    const user = process.env.GMAIL_USER || 'propsmartrealty@gmail.com';
    const pass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD;

    // Build Email HTML Content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #C5A059; rounded-radius: 8px; background-color: #FAF8F5;">
        <h2 style="color: #122A23; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">
          🚀 New Lead Enquiry — K Raheja Corp Viva
        </h2>
        <p style="font-size: 14px; color: #333;">
          You have received a new customer lead enquiry from the <strong>K Raheja Corp Viva</strong> website.
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5; width: 30%;">Full Name:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Phone Number:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">
              <a href="tel:${phone}" style="color: #C5A059; font-weight: bold; text-decoration: none;">${phone || 'N/A'}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Email Address:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${email || 'N/A'}</td>
          </tr>
          ${plotSize ? `
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Interested Size:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${plotSize}</td>
          </tr>
          ` : ''}
          ${date ? `
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Preferred Visit Date:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${date}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Source / Form:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${source || 'Website Lead Form'}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 8px; font-weight: bold; background: #122A23; color: #FAF8F5;">Message / Notes:</td>
            <td style="padding: 8px; background: #fff; border: 1px solid #ddd;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; font-size: 11px; color: #777; text-align: center;">
          Sent automatically from K Raheja Corp Viva Lead Capture System • Propsmart Realty
        </p>
      </div>
    `;

    if (pass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"K Raheja Viva Leads" <${user}>`,
        to: 'propsmartrealty@gmail.com',
        subject: `🔥 New Lead: ${name || 'Enquiry'} (${phone || 'No Phone'}) — K Raheja Viva`,
        html: emailHtml,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully',
      recipient: 'propsmartrealty@gmail.com',
    });
  } catch (error: any) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
