import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    let record = rateLimitMap.get(ip);
    if (!record || now > record.expiresAt) {
      record = { count: 1, expiresAt: now + 60000 };
    } else {
      record.count += 1;
    }
    rateLimitMap.set(ip, record);

    if (record.count > 5) {
      return NextResponse.json(
        { error: 'Too Many Requests' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    const body = await request.json();
    const { email, page } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // In production: integrate with Mailchimp/SendGrid/Klaviyo
    // Example: await mailchimp.lists.addListMember(AUDIENCE_ID, { email_address: email, status: 'subscribed' });
    console.log(`[Price Alert Subscription] Email: ${email} | Page: ${page} | Time: ${new Date().toISOString()}`);

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
