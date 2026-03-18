import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// NOTE: The `from` address must be a verified domain in your Resend account.
// For initial testing, use onboarding@resend.dev (only works if recipient
// email matches your Resend account email). For production, verify a sending
// domain at resend.com/domains and update this address.
const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_ADDRESS = "annie@bffomaha.org";

const AD_LABELS: Record<string, string> = {
  logo: "Logo Only — $100",
  "quarter-h": "Quarter Page Horizontal — $250 (6\" × 3\")",
  "quarter-v": "Quarter Page Vertical — $250 (3\" × 4.5\")",
  "half-h": "Half Page Horizontal — $500 (6\" × 4.5\")",
  "half-v": "Half Page Vertical — $500 (3\" × 9\")",
  full: "Full Page — $1,000 (6\" × 9\")",
  questions: "Has questions / not sure yet",
};

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Form submission is not configured yet. Please email annie@bffomaha.org directly." },
      { status: 503 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, business, email, phone, adInterest, message } = body;

  if (!name || !business || !email || !adInterest) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  const adLabel = AD_LABELS[adInterest] ?? adInterest;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #111;">
      <h2 style="border-bottom: 2px solid #000; padding-bottom: 12px;">
        New Ad Inquiry — The Carrot
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #555;">Name</td>
          <td style="padding: 8px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Business</td>
          <td style="padding: 8px 0;">${business}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
          <td style="padding: 8px 0;">${phone || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Ad Interest</td>
          <td style="padding: 8px 0;">${adLabel}</td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
          <td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td>
        </tr>
        ` : ""}
      </table>
      <hr style="margin-top: 24px; border: none; border-top: 1px solid #ddd;" />
      <p style="color: #999; font-size: 12px; margin-top: 12px;">
        Submitted via The Carrot advertising inquiry form.
      </p>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: email,
    subject: `Ad Inquiry: ${business} — ${adLabel}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send your inquiry. Please email annie@bffomaha.org directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
