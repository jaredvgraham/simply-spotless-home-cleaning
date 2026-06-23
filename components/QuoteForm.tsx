"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const recipientEmail = "hello@simplyspotlesshomecleaning.com";

type FieldIconName = "user" | "mail" | "phone" | "pin" | "message";

function FieldIcon({ name }: { name: FieldIconName }) {
  const paths = {
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="8" r="4" />
      </>
    ),
    mail: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M6.6 3.8 9 3l2 5-2 1.2a12 12 0 0 0 5.8 5.8L16 13l5 2-1 2.4c-.4 1-1.4 1.7-2.5 1.5C10.7 18.1 5.9 13.3 5.1 6.5c-.1-1.1.5-2.2 1.5-2.7Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
    message: (
      <>
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="size-5"
    >
      {paths[name]}
    </svg>
  );
}

function getValue(formData: FormData, name: string) {
  return String(formData.get(name) || "");
}

function TextField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
  icon,
}: Readonly<{
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
  icon: FieldIconName;
}>) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-700 sm:text-base">
        {label}
        {required ? " *" : ""}
      </span>
      <span className="relative mt-2 block min-w-0 sm:mt-3">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:left-4">
          <FieldIcon name={icon} />
        </span>
        <input
          required={required}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="box-border min-w-0 w-full max-w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-base text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 sm:py-4 sm:pl-12 sm:pr-5 sm:text-lg"
        />
      </span>
    </label>
  );
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const details = {
      firstName: getValue(formData, "firstName"),
      lastName: getValue(formData, "lastName"),
      email: getValue(formData, "email"),
      phone: getValue(formData, "phone"),
      postalCode: getValue(formData, "postalCode"),
      message: getValue(formData, "message") || "No message provided.",
    };

    const message = [
      "Hi Faith,",
      "",
      "I would like a cleaning quote from Simply Spotless Cleaning LLC.",
      "",
      `First Name: ${details.firstName}`,
      `Last Name: ${details.lastName}`,
      `Email: ${details.email}`,
      `Phone: ${details.phone}`,
      `Postal Code: ${details.postalCode}`,
      "",
      "Message:",
      details.message,
    ].join("\n");

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      "Free Cleaning Quote Request",
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  return (
    <form
      id="quote-form"
      onSubmit={handleSubmit}
      className="min-w-0 w-full max-w-full scroll-mt-24 rounded-2xl bg-white p-4 text-slate-950 sm:rounded-3xl sm:p-6 lg:p-8"
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-600 sm:text-sm sm:tracking-[0.25em]">
        Free quote form
      </p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:mt-3 sm:text-3xl">
        Free Cleaning Quote Request
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
        Tell us how we can serve you better and Faith will follow up with a
        personalized quote.
      </p>

      <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
        <TextField
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          autoComplete="given-name"
          icon="user"
        />
        <TextField
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name"
          autoComplete="family-name"
          icon="user"
        />
        <TextField
          required
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          icon="mail"
        />
        <TextField
          required
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          autoComplete="tel"
          icon="phone"
        />
        <TextField
          required
          label="Postal Code"
          name="postalCode"
          placeholder="ZIP or postal code"
          autoComplete="postal-code"
          icon="pin"
        />

        <label className="block min-w-0">
          <span className="text-sm font-black text-slate-700 sm:text-base">
            Message
          </span>
          <span className="relative mt-2 block min-w-0 sm:mt-3">
            <span className="pointer-events-none absolute left-3 top-3.5 text-slate-400 sm:left-4 sm:top-4">
              <FieldIcon name="message" />
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us how we can serve you better."
              className="box-border min-w-0 w-full max-w-full resize-none rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-base text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 sm:py-4 sm:pl-12 sm:pr-5 sm:text-lg"
            />
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-sky-500 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-600 sm:mt-8 sm:px-7 sm:py-4 sm:text-base"
      >
        Request My Quote
      </button>

      {submitted ? (
        <p className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm font-semibold leading-6 text-sky-800">
          Your email app should open with the quote request filled in. Send it
          from there so Faith receives the details.
        </p>
      ) : null}
    </form>
  );
}
