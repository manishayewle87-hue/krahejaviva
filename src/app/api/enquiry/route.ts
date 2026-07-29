import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  const user = (process.env.GMAIL_USER || process.env.EMAIL_USER || 'propsmartrealty@gmail.com').trim();
  const pass = (
    process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_PASSWORD ||
    process.env.EMAIL_PASSWORD ||
    process.env.GMAIL_PASS ||
    process.env.SMTP_PASSWORD ||
    ''
  ).trim().replace(/\s+/g, '');

  let connectionStatus = 'Not Configured (Missing GMAIL_APP_PASSWORD)';
  let verifyError = null;

  if (pass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
      });
      await transporter.verify();
      connectionStatus = 'Verified & Connected to Gmail SMTP';
    } catch (err: any) {
      connectionStatus = 'Failed to Connect to Gmail SMTP';
      verifyError = err.message || String(err);
    }
  }

  return NextResponse.json({
    status: 'Active',
    service: 'K Raheja Corp Viva Lead Capture Engine',
    recipientEmail: 'propsmartrealty@gmail.com',
    smtpUser: user,
    hasAppPassword: Boolean(pass),
    connectionStatus,
    verifyError,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, plotSize, source, date } = body;

    const recipient = 'propsmartrealty@gmail.com';
    const user = (process.env.GMAIL_USER || process.env.EMAIL_USER || recipient).trim();
    const pass = (
      process.env.GMAIL_APP_PASSWORD ||
      process.env.GMAIL_PASSWORD ||
      process.env.EMAIL_PASSWORD ||
      process.env.GMAIL_PASS ||
      process.env.SMTP_PASSWORD ||
      ''
    ).trim().replace(/\s+/g, '');

    console.log(`[LEAD RECEIVED] Name: ${name} | Phone: ${phone} | Email: ${email} | Source: ${source}`);

    // Build Luxury K Raheja Viva HTML Email
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

    let smtpResult = null;
    let smtpError = null;

    if (pass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user, pass },
        });

        smtpResult = await transporter.sendMail({
          from: `"K Raheja Viva Leads" <${user}>`,
          to: recipient,
          replyTo: email && email.includes('@') ? email : recipient,
          subject: `🔥 New Lead: ${name || 'Prospect'} (${phone || 'No Phone'}) — K Raheja Viva`,
          html: emailHtml,
        });

        console.log('[GMAIL SMTP SUCCESS]', smtpResult.messageId);
      } catch (err: any) {
        smtpError = err.message || String(err);
        console.error('[GMAIL SMTP ERROR]', smtpError);
      }
    }

    return NextResponse.json({
      success: true,
      emailDispatched: Boolean(smtpResult),
      smtpResult: smtpResult ? { messageId: smtpResult.messageId, response: smtpResult.response } : null,
      smtpError: smtpError,
      recipient: recipient,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Lead processing error' },
      { status: 500 }
    );
  }
}
