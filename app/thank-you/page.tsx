import type { Metadata } from "next";
import { FadeIn } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Simply Spotless Cleaning Services",
  description:
    "Your quote request was received. You'll hear back shortly with next steps.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Simply Spotless Cleaning Services logo"
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

      <section className="flex flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto w-full max-w-xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-sky-soft text-sky-accent">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="size-8"
            >
              <path d="m5 12 4 4 10-10" />
            </svg>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-accent">
            Quote Request Received
          </p>
          <h1 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
            Thank you!
          </h1>
          <p className="mt-5 text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
            Your quote request was sent successfully. You&apos;ll hear back
            shortly with next steps and a personalized cleaning plan for your
            home.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-dark"
            >
              Return Home
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-sky-soft"
            >
              View Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
