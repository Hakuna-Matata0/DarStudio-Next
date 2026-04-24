import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  budget?: string;
};

type ValidateResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function asOptionalString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length ? t : undefined;
}

function validate(body: any): ValidateResult {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const phone = asOptionalString(body?.phone);
  const budget = asOptionalString(body?.budget);

  if (!name || name.length < 2) return { ok: false as const, error: "Nieprawidłowe imię i nazwisko." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false as const, error: "Nieprawidłowy email." };
  if (!subject || subject.length < 3) return { ok: false as const, error: "Nieprawidłowy temat." };
  if (!message || message.length < 10) return { ok: false as const, error: "Wiadomość jest zbyt krótka." };

  return { ok: true as const, data: { name, email, phone, subject, message, budget } };
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Unsupported content type." }, { status: 415 });
    }

    const body = await req.json();
    const parsed = validate(body);
    if (parsed.ok === false) {
      return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "darstudio.client@gmail.com";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!isNonEmptyString(smtpHost) || !isNonEmptyString(smtpPortRaw) || !isNonEmptyString(smtpUser) || !isNonEmptyString(smtpPass)) {
      return NextResponse.json({ ok: false, error: "Brak konfiguracji SMTP na serwerze." }, { status: 500 });
    }

    const smtpPort = Number(smtpPortRaw);
    const secure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const { name, email, phone, subject, message, budget } = parsed.data;

    const text = [
      `Nowa wiadomość z formularza kontaktowego`,
      ``,
      `Imię i nazwisko: ${name}`,
      `Email: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      budget ? `Budżet: ${budget}` : null,
      `Temat: ${subject}`,
      ``,
      `Wiadomość:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: process.env.MAIL_FROM || `"Dar Studio" <${smtpUser}>`,
      to,
      replyTo: email,
      subject: `Kontakt: ${subject}`,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Wystąpił błąd serwera." }, { status: 500 });
  }
}
