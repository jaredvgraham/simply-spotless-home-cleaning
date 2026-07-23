import JsonLd from "@/components/JsonLd";
import {
  FadeIn,
  MotionAnchor,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import { companyContactEmail } from "@/backend/lib/mail";
import { buildTownServiceJsonLd } from "@/lib/seo";
import {
  companyName,
  companyPhone,
  companyPhoneHref,
  getTownBySlug,
  serviceTowns,
} from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ town: string }>;
};

export function generateStaticParams() {
  return serviceTowns.map((town) => ({ town: town.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTownBySlug(slug);

  if (!town) {
    return {
      title: "Service Area",
    };
  }

  const title = `House Cleaning in ${town.name}, MA`;
  const description = `${companyName} provides reliable residential house cleaning in ${town.name}, MA. Book standard cleans, deep cleans, move-in/move-out cleaning, and recurring service near you.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${town.slug}`,
    },
    openGraph: {
      title: `${title} | ${companyName}`,
      description,
      url: `/areas/${town.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${companyName}`,
      description,
    },
    keywords: [
      `house cleaning ${town.name} MA`,
      `home cleaners ${town.name}`,
      `deep cleaning ${town.name} MA`,
      `move out cleaning ${town.name}`,
      `recurring house cleaning ${town.name}`,
    ],
  };
}

const services = [
  {
    title: "Standard Clean",
    text: "Everyday upkeep that keeps kitchens, bathrooms, floors, and living spaces feeling fresh.",
  },
  {
    title: "Deep Clean",
    text: "A more thorough clean for buildup, baseboards, trim, and hard-to-reach details.",
  },
  {
    title: "Move-In / Move-Out",
    text: "Top-to-bottom cleaning when you are starting fresh or leaving a home ready for the next chapter.",
  },
  {
    title: "Recurring Cleaning",
    text: "Weekly, biweekly, or monthly visits so your home stays consistently cared for.",
  },
];

export default async function TownServiceAreaPage({ params }: PageProps) {
  const { town: slug } = await params;
  const town = getTownBySlug(slug);

  if (!town) notFound();

  const nearbyTowns = serviceTowns
    .filter((entry) => entry.slug !== town.slug)
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={buildTownServiceJsonLd(town.name, town.slug)} />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
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
        <MotionAnchor
          href="/#quote-form"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
        >
          Request a Quote
        </MotionAnchor>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <FadeIn>
          <p className="mb-5 inline-block rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">
            Serving {town.name}, MA
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            House cleaning in {town.name}, Massachusetts
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
            {town.blurb} {companyName} is a locally owned, fully insured
            cleaning company serving {town.name} and nearby {town.county}{" "}
            communities with standard cleans, deep cleans, move-in/move-out
            service, and recurring plans.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <MotionAnchor
              href="/#quote-form"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Request a Quote →
            </MotionAnchor>
            <a
              href={companyPhoneHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-sky-soft"
            >
              Call {companyPhone}
            </a>
          </div>
        </FadeIn>
      </section>

      <section className="bg-sky-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-accent">
              Cleaning Services in {town.name}
            </p>
            <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
              Cleaning options for {town.name} homes
            </h2>
            <p className="mt-4 text-base leading-7 text-navy/70">
              Whether you need a one-time refresh or a consistent cleaning
              routine, we build each visit around your home, priorities, and
              schedule in {town.name}.
            </p>
          </FadeIn>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <article className="h-full rounded-3xl border border-white/70 bg-white px-6 py-7 shadow-sm">
                  <h3 className="font-serif text-xl text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-navy/70">
                    {service.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <FadeIn>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Why {town.name} homeowners choose Simply Spotless
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-navy/75">
              <li>
                Locally owned service with clear communication and dependable
                scheduling.
              </li>
              <li>
                Fully insured residential cleaning for peace of mind in your{" "}
                {town.name} home.
              </li>
              <li>
                Flexible plans for weekly, biweekly, monthly, or one-time
                visits.
              </li>
              <li>
                Helpful extras available, including inside fridge and oven
                cleaning, blinds, cabinets, laundry folding, and linen changes.
              </li>
            </ul>
            <p className="mt-6 text-base leading-7 text-navy/75">
              Ready for a cleaner home in {town.name}? Request a free quote and
              we&apos;ll follow up with a personalized estimate. Prefer to talk
              first? Call{" "}
              <a
                href={companyPhoneHref}
                className="font-semibold text-navy underline-offset-2 hover:underline"
              >
                {companyPhone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${companyContactEmail}`}
                className="font-semibold text-navy underline-offset-2 hover:underline"
              >
                {companyContactEmail}
              </a>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[2rem] border border-sky-soft bg-sky-soft/60 p-8">
              <h2 className="font-serif text-2xl text-navy">
                Nearby towns we also serve
              </h2>
              <p className="mt-3 text-sm leading-6 text-navy/70">
                Looking for cleaning help just outside {town.name}? We also
                serve these nearby communities.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {nearbyTowns.map((nearby) => (
                  <li key={nearby.slug}>
                    <Link
                      href={`/areas/${nearby.slug}`}
                      className="text-sm font-medium text-navy transition hover:text-sky-accent"
                    >
                      {nearby.name}, MA
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/#service-areas"
                className="mt-6 inline-block text-sm font-semibold text-navy underline-offset-2 hover:underline"
              >
                View all service areas →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
