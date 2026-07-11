import QuoteForm from "@/components/QuoteForm";
import {
  FadeIn,
  MotionAnchor,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import { companyContactEmail } from "@/backend/lib/mail";
import Image from "next/image";

type IconName =
  | "sparkle"
  | "heart"
  | "home"
  | "clock"
  | "leaf"
  | "box"
  | "calendar"
  | "plus"
  | "check"
  | "facebook";

function Icon({
  name,
  className = "",
  strokeWidth = "2",
}: {
  name: IconName;
  className?: string;
  strokeWidth?: string;
}) {
  const paths = {
    sparkle: (
      <>
        <path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    heart: (
      <path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6Z" />
    ),
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V21h14V10.5" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 18 2c1 2 2 4.5 2 8 0 5.5-4.5 10-9 10Z" />
        <path d="M2 21c0-3 1.5-5.5 4-7" />
      </>
    ),
    box: (
      <>
        <path d="M21 8v13H3V8" />
        <path d="M1 8h22" />
        <path d="M10 12h4" />
        <path d="m12 8-8-4 8-4 8 4-8 4Z" />
      </>
    ),
    calendar: (
      <>
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4 8h16" />
        <path d="M5 5h14v16H5z" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
      strokeWidth={strokeWidth}
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-navy/80 transition hover:text-navy"
    >
      {children}
    </a>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MotionAnchor
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark ${className}`}
    >
      {children}
    </MotionAnchor>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    icon: IconName;
    title: string;
    image: string;
    description: string;
    details: string[];
  };
}) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-sky-soft bg-white shadow-sm">
      <div className="relative">
        <div className="relative aspect-[4/3]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <span className="absolute -bottom-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-sky-soft text-sky-accent">
          <Icon name={service.icon} className="size-4" />
        </span>
      </div>

      <div className="px-5 pb-6 pt-8 text-center">
        <h3 className="font-serif text-xl text-navy">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-navy/70">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5 text-left">
          {service.details.map((detail) => (
            <li
              key={detail}
              className="flex items-start gap-2.5 text-sm text-navy/80"
            >
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky-accent">
                <Icon name="check" className="size-2.5" strokeWidth="3" />
              </span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  const values = [
    {
      icon: "sparkle" as const,
      title: "Reliable",
      text: "Clear communication, on-time service, and results you can count on.",
    },
    {
      icon: "heart" as const,
      title: "Detail-Oriented",
      text: "Attention to the little things that make the biggest difference in how your home feels.",
    },
    {
      icon: "home" as const,
      title: "Trustworthy",
      text: "Your home is treated with respect and care at every visit.",
    },
    {
      icon: "clock" as const,
      title: "Flexible",
      text: "Weekly, biweekly, monthly, or one-time scheduling built around your routine.",
    },
    {
      icon: "leaf" as const,
      title: "Locally Owned",
      text: "A locally owned business serving Plymouth, MA and surrounding areas.",
    },
  ];

  const services = [
    {
      icon: "home" as const,
      title: "Standard Clean",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
      description:
        "Regular upkeep focused on the everyday areas that keep your home feeling fresh.",
      details: [
        "Dusting all surfaces",
        "Vacuuming & mopping floors",
        "Kitchen cleaning (counters, sink, exterior appliances)",
        "Bathroom cleaning & sanitizing",
        "Trash removal",
      ],
    },
    {
      icon: "sparkle" as const,
      title: "Deep Clean",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
      description:
        "A more thorough clean for when your home needs extra care and attention.",
      details: [
        "Everything in a Standard Clean",
        "Plus inside appliances (oven)",
        "Baseboards & trim",
        "Interior windows",
        "Detailed scrubbing of buildup",
        "Hard-to-reach areas",
      ],
    },
    {
      icon: "box" as const,
      title: "Move-In / Move-Out",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      description:
        "Start fresh in a new space or leave one ready for the next chapter.",
      details: [
        "Top-to-bottom cleaning",
        "Inside cabinets & drawers",
        "Inside appliances",
        "Closets cleaned",
        "Baseboards, doors & light switches",
        "Bathrooms fully sanitized",
      ],
    },
    {
      icon: "calendar" as const,
      title: "Recurring Cleaning",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80",
      description:
        "A consistent cleaning routine with weekly, biweekly, or monthly visits.",
      details: [
        "Customized to your needs",
        "Consistent, reliable service",
        "Save time and enjoy a cleaner home",
        "Peace of mind",
      ],
    },
    {
      icon: "plus" as const,
      title: "Add-Ons & Extras",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80",
      description:
        "Need a little more? Add extras to any clean to match what your home needs.",
      details: [
        "Clean inside fridge",
        "Inside oven",
        "Blinds",
        "Inside cabinets and drawers",
        "Fold laundry",
        "Change bed linens",
        "Custom requests welcome",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Simply Spotless Cleaning Services logo"
            width={72}
            height={72}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            priority
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#why-choose-us">What to Expect</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <PrimaryButton
          href="#quote-form"
          className="shrink-0 px-5 py-2.5 text-sm"
        >
          Request a Quote
        </PrimaryButton>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-8"
      >
        <div id="about">
          <FadeIn delay={0.05}>
            <p className="mb-5 inline-block rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-navy">
              Plymouth, MA &amp; Surrounding Areas
            </p>
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              A clean home.
              <br />
              More time for{" "}
              <span className="font-script text-4xl text-sky-accent sm:text-5xl lg:text-[3rem]">
                what matters
              </span>
              <span className="font-script text-sky-accent"> ♡</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
              Reliable home cleaning tailored to your space and schedule. Every
              visit focuses on the details that help your home feel calm, fresh,
              and well cared for.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton href="#quote-form">
                Request a Quote →
              </PrimaryButton>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-sky-soft"
              >
                View Services
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="relative" delay={0.12}>
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-sky-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/ai%20fath1%20.png"
                alt="Bright, clean kitchen with marble countertops"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section
        id="why-choose-us"
        className="border-y border-sky-soft bg-white px-4 py-14 sm:px-6 lg:px-8"
      >
        <Stagger className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {values.map((item) => (
            <StaggerItem key={item.title} className="text-center">
              <article>
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-sky-soft text-sky-accent">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <h3 className="font-serif text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/70">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-accent">
            Cleaning Services
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl lg:text-[2.75rem]">
            Cleaning options tailored to your home and lifestyle
            <span className="font-script text-sky-accent"> ♡</span>
          </h2>
        </div>

        <Stagger className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mx-auto mt-6 flex max-w-7xl flex-wrap justify-center gap-6">
          {services.slice(3).map((service) => (
            <StaggerItem
              key={service.title}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
            >
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section
        id="quote-form"
        className="bg-sky-soft px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Get a cleaning quote for your home.
            </h2>
            <p className="mt-3 text-base leading-7 text-navy/70">
              Share a few quick details, and we&apos;ll reach out with a
              personalized estimate.
            </p>
          </FadeIn>
          <QuoteForm />
        </div>
      </section>

      <section
        id="reviews"
        className="mx-4 mb-16 overflow-hidden rounded-[2rem] bg-sky-soft sm:mx-6 lg:mx-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12 lg:py-16">
          <FadeIn className="flex justify-center lg:justify-start">
            <div className="relative size-56 overflow-hidden rounded-full shadow-lg sm:size-64">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&q=80"
                alt="Cleaning supplies in a bucket"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-accent">
              Ready for a Spotless Home?
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl lg:text-[2.5rem]">
              A spotless home is closer than you think.
              <span className="font-script text-sky-accent"> ♡</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-navy/75">
              Request a free quote to get a cleaning plan built around your
              home, your needs, and your schedule.
            </p>
            <PrimaryButton href="#quote-form" className="mt-8">
              Request a Quote →
            </PrimaryButton>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <footer
          id="contact"
          className="border-t border-sky-soft bg-white px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className="font-serif text-lg text-navy">
                Simply Spotless Cleaning Services
              </p>
              <p className="mt-3 text-sm leading-6 text-navy/70">
                Plymouth, MA &amp; Surrounding Areas
              </p>
              <p className="mt-1 text-sm text-navy/70">Fully Insured</p>
            </div>

            <div>
              <p className="text-sm font-bold text-navy">Quick Links</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <NavLink href="#services">Services</NavLink>
                </li>
                <li>
                  <NavLink href="#about">About</NavLink>
                </li>
                <li>
                  <NavLink href="#reviews">Reviews</NavLink>
                </li>
                <li>
                  <NavLink href="#contact">Contact</NavLink>
                </li>
                <li>
                  <a className="transition hover:text-navy" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-navy" href="/terms">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-navy">Get in Touch</p>
              <ul className="mt-4 space-y-2.5 text-sm text-navy/70">
                <li>
                  <a
                    href="tel:+15085706658"
                    className="transition hover:text-navy"
                  >
                    (508) 570-6658
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyContactEmail}`}
                    className="break-all transition hover:text-navy"
                  >
                    {companyContactEmail}
                  </a>
                </li>
                <li className="flex items-center gap-2 pt-1">
                  <Icon name="facebook" className="size-4 text-sky-accent" />
                  <span>simplyspotlessclean</span>
                </li>
              </ul>
            </div>

            <div className="flex items-start justify-start sm:justify-end">
              <Image
                src="/logo.png"
                alt="Simply Spotless Cleaning Services logo"
                width={120}
                height={120}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </div>
          </div>
        </footer>
      </FadeIn>
    </main>
  );
}
