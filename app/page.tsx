import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";

type IconName =
  | "sparkle"
  | "spray"
  | "home"
  | "calendar"
  | "clipboard"
  | "smile"
  | "message"
  | "shield"
  | "clock"
  | "heart";

function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths = {
    sparkle: (
      <>
        <path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    spray: (
      <>
        <path d="M9 3h6l1 4H8l1-4Z" />
        <path d="M10 7h4v4l3 3v7H7v-7l3-3V7Z" />
        <path d="M17 5h3" />
      </>
    ),
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V21h14V10.5" />
        <path d="M9 21v-6h6v6" />
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
    clipboard: (
      <>
        <path d="M9 4h6l1 3H8l1-3Z" />
        <path d="M7 6H5v15h14V6h-2" />
        <path d="m9 14 2 2 4-5" />
      </>
    ),
    smile: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </>
    ),
    message: (
      <>
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: (
      <path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6Z" />
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
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const services = [
    {
      icon: "home" as const,
      title: "Standard Home Cleaning",
      description:
        "A reliable reset for kitchens, bathrooms, bedrooms, and living spaces.",
      details: ["Dusting", "Floors", "Counters", "Trash removal"],
    },
    {
      icon: "sparkle" as const,
      title: "Deep Cleaning",
      description:
        "Extra attention for buildup, baseboards, appliances, and hard-to-reach areas.",
      details: ["Baseboards", "Detail work", "Heavy buildup", "Appliances"],
    },
    {
      icon: "spray" as const,
      title: "Move-In / Move-Out",
      description:
        "A top-to-bottom clean to help make a home feel fresh before or after a move.",
      details: ["Empty homes", "Cabinets", "Bathrooms", "Kitchen refresh"],
    },
    {
      icon: "calendar" as const,
      title: "Recurring Cleaning",
      description:
        "Weekly, bi-weekly, or monthly visits to keep your home consistently spotless.",
      details: ["Weekly", "Bi-weekly", "Monthly", "Custom schedule"],
    },
  ];

  const steps = [
    {
      icon: "message" as const,
      title: "Tell Faith what you need",
      text: "Share your home size, priorities, and timing so the visit can be tailored to your space.",
    },
    {
      icon: "clipboard" as const,
      title: "Get a spotless plan",
      text: "Faith brings a clear checklist, reliable communication, and careful attention to the rooms that matter most.",
    },
    {
      icon: "smile" as const,
      title: "Enjoy a lighter home",
      text: "Come back to fresh surfaces, tidy rooms, and the calm feeling of a home that has been cared for.",
    },
  ];

  const benefits = [
    {
      icon: "message" as const,
      text: "Friendly, consistent communication from Faith",
    },
    {
      icon: "sparkle" as const,
      text: "Light blue, fresh-home attention to bright surfaces",
    },
    {
      icon: "clock" as const,
      text: "Flexible cleaning for weekly, biweekly, and one-time needs",
    },
    {
      icon: "heart" as const,
      text: "Respectful service for kitchens, baths, bedrooms, and living areas",
    },
  ];

  const beforeAfterImages = [
    {
      src: "/fba1.png",
      title: "Living room and kitchen refresh",
      description:
        "A cluttered shared space reset into a bright, tidy room ready to enjoy.",
    },
    {
      src: "/fba2.png",
      title: "Living room and kitchen deep clean",
      description:
        "A cluttered shared space reset into a bright, tidy room ready to enjoy.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative isolate bg-[linear-gradient(135deg,#effbff_0%,#ffffff_48%,#d9f3ff_100%)]">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.18),transparent_30%)]" />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg shadow-sky-100 ring-1 ring-sky-100 sm:size-16">
              <Image
                src="/logo.png"
                alt="Simply Spotless Cleaning Services logo"
                fill
                sizes="(max-width: 640px) 48px, 64px"
                className="object-contain p-1"
                priority
              />
            </span>
            <span className="hidden text-lg font-black tracking-tight text-slate-950 sm:block">
              Simply Spotless Cleaning Services
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex"
          >
            <a className="transition hover:text-sky-600" href="#services">
              Services
            </a>
            <a className="transition hover:text-sky-600" href="#results">
              Results
            </a>
            <a className="transition hover:text-sky-600" href="#about">
              About
            </a>
            <a className="transition hover:text-sky-600" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 pt-2 sm:gap-8 sm:px-6 sm:pb-16 sm:pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-16"
        >
          <div className="flex flex-col justify-center">
            <p className="mb-3 w-fit rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-sky-700 shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
              Faith-led home cleaning
            </p>
            <h1 className="max-w-4xl text-[1.85rem] font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl sm:leading-tight lg:text-7xl">
              A brighter, calmer home starts with a spotless clean.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              Simply Spotless Home Cleaning is run by Faith and built around
              reliable, detailed care for busy households that want fresh rooms,
              gleaming surfaces, and less stress.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <a
                href="tel:+15085706658"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600 sm:px-7 sm:py-4 sm:text-base"
              >
                Call Faith
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 sm:px-7 sm:py-4 sm:text-base"
              >
                Request a Quote
              </a>
            </div>
            <div className="mt-6 hidden max-w-xl grid-cols-3 gap-4 text-center sm:mt-10 sm:grid sm:text-left">
              <div>
                <p className="text-3xl font-black text-sky-600">100%</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Detail focused
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-sky-600">Faith</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Owner operated
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-sky-600">Fresh</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Every visit
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-sky-100 bg-white p-3 shadow-xl shadow-sky-100 sm:rounded-4xl sm:p-5 sm:shadow-2xl">
              <div className="rounded-2xl bg-sky-50 p-2 sm:rounded-3xl sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sky-100 sm:aspect-video sm:rounded-[1.25rem]">
                  <Image
                    src="/ai%20fath1%20.png"
                    alt="Faith holding cleaning supplies in a bright kitchen"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-3 hidden rounded-2xl bg-white px-4 py-3 shadow-sm sm:mt-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-lg font-black text-slate-950">
                    Polished rooms. Peaceful routines.
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Faith brings the supplies, care, and detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[linear-gradient(180deg,#f0fbff_0%,#ffffff_100%)] px-6 py-20 text-slate-950 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Clear cleaning options for every kind of home.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Pick the clean that fits your space, schedule, and level of
              detail. Faith can help with one-time resets, regular upkeep, and
              bigger deep-cleaning projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-sky-100 bg-white p-6 text-slate-950 shadow-xl shadow-sky-100 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-sky-200"
              >
                <div className="flex items-start gap-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <Icon name={service.icon} className="size-7" />
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                      Service {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl font-black tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-sky-50 px-3 py-2 text-sm font-bold text-sky-800"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-sky-100 bg-white p-6 text-center shadow-sm">
            <p className="text-lg font-bold leading-8 text-slate-700">
              Not sure what you need? Send a quick quote request and Faith will
              help match the service to your home.
            </p>
            <a
              href="#quote-form"
              className="mt-5 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section id="results" className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Before & After
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                See the Simply Spotless difference.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Real transformations help show the care, detail, and fresh-home
              feeling Faith brings to every cleaning visit.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {beforeAfterImages.map((item) => (
              <article
                key={item.src}
                className="overflow-hidden rounded-4xl border border-sky-100 bg-sky-50 p-4 shadow-xl shadow-sky-100"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
                  <Image
                    src={item.src}
                    alt={`${item.title} before and after cleaning result`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-600">
                      Before
                    </span>
                    <span className="rounded-full bg-sky-500 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                      After
                    </span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl bg-sky-100 p-8">
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-sky-100">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Meet Faith
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                Owner-run care from someone who treats details like they matter.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Faith started Simply Spotless Home Cleaning to give families a
                dependable, friendly cleaning experience. Every visit is guided
                by respect for your home, clear communication, and a simple
                goal: make the space feel easier to live in.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon name={step.icon} className="size-6" />
                  </span>
                  <p className="text-sm font-black text-sky-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-8 text-xl font-black text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">
              Why choose us
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              Clean spaces, clear expectations.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {benefits.map((item) => (
              <div
                key={item.text}
                className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm"
              >
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <p className="text-lg font-bold leading-7 text-slate-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-sky-100 bg-sky-50 shadow-2xl shadow-sky-100 sm:rounded-4xl">
          <div className="grid min-w-0 gap-6 p-4 text-slate-950 sm:gap-8 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div className="min-w-0">
              <div className="mb-6 w-fit rounded-2xl border border-sky-100 bg-white p-3 shadow-sm sm:mb-8 sm:rounded-3xl sm:p-4">
                <Image
                  src="/logo.png"
                  alt="Simply Spotless Cleaning Services logo"
                  width={160}
                  height={160}
                  className="h-20 w-20 object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 sm:text-sm sm:tracking-[0.3em]">
                Book your clean
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                Ready for a home that feels simply spotless?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                Fill out the quote request and Faith will have the details she
                needs to understand your home, schedule, and cleaning
                priorities.
              </p>
              <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:mt-8 sm:rounded-3xl sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-600 sm:text-sm sm:tracking-[0.25em]">
                  Prefer direct contact?
                </p>
                <a
                  href="tel:+15085706658"
                  className="mt-4 block text-xl font-black text-slate-950 transition hover:text-sky-600 sm:mt-5 sm:text-2xl"
                >
                  +1 (508) 570-6658
                </a>
                <a
                  href="mailto:hello@simplyspotlesshomecleaning.com"
                  className="mt-2 block break-all text-sm font-bold text-slate-600 transition hover:text-sky-600 sm:mt-3 sm:text-base"
                >
                  hello@simplyspotlesshomecleaning.com
                </a>
              </div>
            </div>
            <div className="min-w-0 w-full">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
