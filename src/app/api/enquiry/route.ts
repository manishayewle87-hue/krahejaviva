import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({
    status: 'Active',
    service: 'K Raheja Corp Viva Lead Capture Engine',
    recipientEmail: 'propsmartrealty@gmail.com',
    nodemailerConfigured: Boolean(process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_USER),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, plotSize, source, date } = body;

    const recipient = 'propsmartrealty@gmail.com';
    const user = process.env.GMAIL_USER || recipient;
    const pass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.EMAIL_PASSWORD;

    console.log(`[LEAD CAPTURED] Name: ${name} | Phone: ${phone} | Email: ${email} | Source: ${source}`);

    // Build K Raheja Viva Luxury HTML Lead Email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #C5A059; border-radius: 12px; background-color: #FAF8F5;">
        
        <div style="background-color: #122A23; padding: 16px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: #C5A059; margin: 0; font-size: 20px; font-family: Georgia, serif; letter-spacing: 1px;">
            K RAHEJA CORP VIVA
          </h1>
          <p style="color: #FAF8F5; margin: 4px 0 0 0; font-size: 12px; text-transform: uppercase; tracking: 2px;">
            High-Intent Luxury Lead Notification
          </p>
        </div>

        <h3 style="color: #122A23; border-bottom: 1px solid #C5A059; padding-bottom: 8px; margin-top: 0;">
          📥 New Customer Lead Captured
        </h3>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5; width: 32%;">Full Name:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #122A23; font-weight: bold;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Mobile Phone:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D;">
              <a href="tel:${phone}" style="color: #C5A059; font-weight: bold; text-decoration: none; font-size: 15px;">📞 ${phone || 'N/A'}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Email Address:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #122A23;">${email || 'N/A'}</td>
          </tr>
          ${plotSize ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Interested Size / Preference:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #C5A059; font-weight: bold;">${plotSize}</td>
          </tr>
          ` : ''}
          ${date ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Preferred Visit Date:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #122A23;">${date}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Form / Source:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #122A23; font-weight: bold;">${source || 'Website Lead Form'}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #122A23; color: #FAF8F5;">Notes / Message:</td>
            <td style="padding: 10px; background: #ffffff; border: 1px solid #E2C07D; color: #333333;">${message}</td>
          </tr>
          ` : ''}
        </table>

        <div style="margin-top: 24px; padding: 12px; background: #1A3D33; border-radius: 6px; text-align: center;">
          <a href="https://wa.me/91${phone ? phone.replace(/\D/g, '') : ''}" style="color: #25D366; text-decoration: none; font-weight: bold; font-size: 14px;">
            💬 Open Direct WhatsApp Chat with Prospect
          </a>
        </div>

        <p style="margin-top: 20px; font-size: 11px; color: #777777; text-align: center; border-top: 1px solid #E2C07D; padding-top: 12px;">
          Dispatched instantly by K Raheja Corp Viva Lead Engine • Propsmart Realty (${recipient})
        </p>
      </div>
    `;

    if (pass) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"K Raheja Viva Leads" <${user}>`,
        to: recipient,
        subject: `🔥 New Lead: ${name || 'Prospect'} (${phone || 'No Phone'}) — K Raheja Viva`,
        html: emailHtml,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry processed and dispatched to Propsmart Realty',
      recipient: recipient,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Enquiry API Dispatch Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Lead dispatch error' },
      { status: 500 }
    );
  }
}
