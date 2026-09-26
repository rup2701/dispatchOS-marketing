import { Resend } from 'resend';

const maxLengths = {
  email: 254,
  area: 200,
  description: 5000,
  steps: 5000,
  environment: 500,
};

type BugReport = {
  email?: unknown;
  area?: unknown;
  description?: unknown;
  steps?: unknown;
  environment?: unknown;
  website?: unknown;
};

function asText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.BUG_REPORT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL || 'DispatchOS Support <support@dispatchos.dev>';

  if (!apiKey || !recipient) {
    return Response.json({ error: 'Bug reports are not configured.' }, { status: 503 });
  }

  let payload: BugReport;

  try {
    payload = await request.json() as BugReport;
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (asText(payload.website)) {
    return Response.json({ ok: true });
  }

  const report = {
    email: asText(payload.email),
    area: asText(payload.area),
    description: asText(payload.description),
    steps: asText(payload.steps),
    environment: asText(payload.environment),
  };

  if (!report.email || !report.area || !report.description) {
    return Response.json({ error: 'Email, area, and description are required.' }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(report.email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (report[field as keyof typeof report].length > maxLength) {
      return Response.json({ error: `${field} is too long.` }, { status: 400 });
    }
  }

  const resend = new Resend(apiKey);
  const subject = `[DispatchOS bug] ${report.area}`;
  const text = [
    `Reply-to: ${report.email}`,
    `Area: ${report.area}`,
    '',
    'What happened:',
    report.description,
    '',
    'Steps to reproduce:',
    report.steps || 'Not provided',
    '',
    'Browser or device:',
    report.environment || 'Not provided',
  ].join('\n');
  const html = `
    <h2>DispatchOS bug report</h2>
    <p><strong>Reply-to:</strong> ${escapeHtml(report.email)}</p>
    <p><strong>Area:</strong> ${escapeHtml(report.area)}</p>
    <h3>What happened</h3>
    <p>${escapeHtml(report.description).replaceAll('\n', '<br />')}</p>
    <h3>Steps to reproduce</h3>
    <p>${escapeHtml(report.steps || 'Not provided').replaceAll('\n', '<br />')}</p>
    <h3>Browser or device</h3>
    <p>${escapeHtml(report.environment || 'Not provided').replaceAll('\n', '<br />')}</p>
  `;

  const { error } = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: report.email,
    subject,
    text,
    html,
  });

  if (error) {
    return Response.json({ error: 'Unable to send bug report.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
