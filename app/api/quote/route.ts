import {
  companyContactEmail,
  getMailTransporter,
  quoteRecipientEmail,
} from "@/backend/lib/mail";
import { NextResponse } from "next/server";

type QuotePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  town?: string;
  message?: string;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailBody(details: Required<QuotePayload>) {
  return [
    "New cleaning quote request from Simply Spotless Cleaning LLC.",
    "",
    `First Name: ${details.firstName}`,
    `Last Name: ${details.lastName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Town: ${details.town}`,
    "",
    "Message:",
    details.message || "No message provided.",
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const details = {
    firstName: getString(payload.firstName),
    lastName: getString(payload.lastName),
    email: getString(payload.email),
    phone: getString(payload.phone),
    town: getString(payload.town),
    message: getString(payload.message),
  };

  if (!details.email || !details.phone || !details.town) {
    return NextResponse.json(
      { error: "Email, phone, and town are required." },
      { status: 400 },
    );
  }

  try {
    const transporter = getMailTransporter();

    await transporter.sendMail({
      from: quoteRecipientEmail,
      to: companyContactEmail,
      replyTo: details.email,
      subject: "Free Cleaning Quote Request",
      text: buildEmailBody(details),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send quote email:", error);
    return NextResponse.json(
      { error: "Unable to send your quote request right now." },
      { status: 500 },
    );
  }
}
