import {
  companyContactEmail,
  getMailTransporter,
  quoteRecipientEmail,
} from "@/backend/lib/mail";
import {
  cleaningServiceOptions,
  contactMethodOptions,
  referralSourceOptions,
  sqftOptions,
} from "@/lib/quote";
import { NextResponse } from "next/server";

type QuotePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  town?: string;
  desiredService?: string;
  sqft?: string;
  referralSource?: string;
  contactMethod?: string;
  message?: string;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidOption(value: string, options: readonly string[]) {
  return options.includes(value);
}

function buildEmailBody(details: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  town: string;
  desiredService: string;
  sqft: string;
  referralSource: string;
  contactMethod: string;
  message: string;
}) {
  return [
    "New cleaning quote request from Simply Spotless Cleaning LLC.",
    "",
    `First Name: ${details.firstName}`,
    `Last Name: ${details.lastName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Preferred Contact Method: ${details.contactMethod}`,
    `Town: ${details.town}`,
    `Desired Service: ${details.desiredService}`,
    `Approx. Square Footage: ${details.sqft}`,
    `How Did You Hear About Us: ${details.referralSource}`,
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
    desiredService: getString(payload.desiredService),
    sqft: getString(payload.sqft),
    referralSource: getString(payload.referralSource),
    contactMethod: getString(payload.contactMethod),
    message: getString(payload.message),
  };

  if (
    !details.email ||
    !details.phone ||
    !details.town ||
    !details.desiredService ||
    !details.sqft ||
    !details.referralSource ||
    !details.contactMethod
  ) {
    return NextResponse.json(
      {
        error:
          "Email, phone, town, desired service, square footage, referral source, and contact method are required.",
      },
      { status: 400 },
    );
  }

  if (!isValidOption(details.desiredService, cleaningServiceOptions)) {
    return NextResponse.json(
      { error: "Please select a valid service." },
      { status: 400 },
    );
  }

  if (!isValidOption(details.sqft, sqftOptions)) {
    return NextResponse.json(
      { error: "Please select a valid square footage range." },
      { status: 400 },
    );
  }

  if (!isValidOption(details.referralSource, referralSourceOptions)) {
    return NextResponse.json(
      { error: "Please select a valid referral source." },
      { status: 400 },
    );
  }

  if (!isValidOption(details.contactMethod, contactMethodOptions)) {
    return NextResponse.json(
      { error: "Please select a valid contact method." },
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
