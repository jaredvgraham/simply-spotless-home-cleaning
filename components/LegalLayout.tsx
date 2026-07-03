import { companyContactEmail } from "@/backend/lib/mail";
import {
  companyLocation,
  companyName,
  companyPhone,
  companyPhoneHref,
} from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: Readonly<{
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${companyName} logo`}
            width={72}
            height={72}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-navy/80 transition hover:text-navy"
        >
          Back to Home
        </Link>
      </header>

      <article className="mx-auto max-w-3xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-accent">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-navy/60">
          Effective date: {effectiveDate}
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-navy/80">
          {children}
        </div>

        <div className="mt-12 rounded-2xl border border-sky-soft bg-sky-soft/40 p-6">
          <h2 className="font-serif text-xl text-navy">Questions?</h2>
          <p className="mt-2 text-sm leading-6 text-navy/75">
            Contact {companyName} at{" "}
            <a
              href={companyPhoneHref}
              className="font-semibold text-navy transition hover:text-sky-accent"
            >
              {companyPhone}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${companyContactEmail}`}
              className="break-all font-semibold text-navy transition hover:text-sky-accent"
            >
              {companyContactEmail}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-navy/60">{companyLocation}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/privacy" className="text-navy/70 transition hover:text-navy">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-navy/70 transition hover:text-navy">
            Terms of Service
          </Link>
        </div>
      </article>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export { LegalSection };
