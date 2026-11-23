import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length < 2 ||
      !EMAIL_RE.test(email) ||
      message.trim().length < 10
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name.trim()}`,
        text: `From: ${name.trim()} <${email}>\n\n${message.trim()}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
