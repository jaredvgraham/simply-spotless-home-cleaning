"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      <span className="text-sm font-semibold text-navy">
        {label}
        {required ? " *" : ""}
      </span>
      <span className="relative mt-2 block min-w-0">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sky-accent sm:left-4">
          <FieldIcon name={icon} />
        </span>
        <input
          suppressHydrationWarning
          required={required}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="box-border min-w-0 w-full max-w-full rounded-xl border border-sky-soft bg-white py-3 pl-10 pr-4 text-base text-navy outline-none transition placeholder:text-navy/40 focus:border-sky-accent focus:ring-2 focus:ring-sky-soft sm:pl-12"
        />
      </span>
    </label>
  );
}

export default function QuoteForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const details = {
      firstName: getValue(formData, "firstName"),
      lastName: getValue(formData, "lastName"),
      email: getValue(formData, "email"),
      phone: getValue(formData, "phone"),
      town: getValue(formData, "town"),
      message: getValue(formData, "message"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          data?.error || "Unable to send your quote request right now.",
        );
      }

      form.reset();
      router.push("/thank-you");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your quote request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="scroll-mt-24 rounded-3xl border border-sky-soft bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
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
      </div>

      <div className="mt-5 space-y-5">
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
          label="Town"
          name="town"
          placeholder="e.g. Plymouth, Duxbury"
          autoComplete="address-level2"
          icon="pin"
        />

        <label className="block min-w-0">
          <span className="text-sm font-semibold text-navy">Message</span>
          <span className="relative mt-2 block min-w-0">
            <span className="pointer-events-none absolute left-3 top-3.5 text-sky-accent sm:left-4">
              <FieldIcon name="message" />
            </span>
            <textarea
              suppressHydrationWarning
              name="message"
              rows={3}
              placeholder="Share any details about your home, schedule, or priorities."
              className="box-border min-w-0 w-full max-w-full resize-none rounded-xl border border-sky-soft bg-white py-3 pl-10 pr-4 text-base text-navy outline-none transition placeholder:text-navy/40 focus:border-sky-accent focus:ring-2 focus:ring-sky-soft sm:pl-12"
            />
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy-dark disabled:cursor-not-allowed disabled:opacity-70 sm:mt-8"
      >
        {isSubmitting ? "Sending..." : "Request a Quote →"}
      </button>

      {error ? (
        <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-medium leading-6 text-red-800">
          {error}
        </p>
      ) : null}
    </form>
  );
}
