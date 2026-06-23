import { getMailTransporter, quoteRecipientEmail } from "@/backend/lib/mail";
import { NextResponse } from "next/server";

type QuotePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  postalCode?: string;
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
    `Postal Code: ${details.postalCode}`,
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
    postalCode: getString(payload.postalCode),
    message: getString(payload.message),
  };

  if (!details.email || !details.phone || !details.postalCode) {
    return NextResponse.json(
      { error: "Email, phone, and postal code are required." },
      { status: 400 },
    );
  }

  try {
    const transporter = getMailTransporter();

    await transporter.sendMail({
      from: quoteRecipientEmail,
      to: "contactsimplyspotlesscleaning@yahoo.com",
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
