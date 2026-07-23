import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { companyLegalName, companyLocation, companyName } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Simply Spotless Cleaning Services home cleaning in Plymouth, MA and surrounding areas.",
  alternates: {
    canonical: "/terms",
  },
};

const effectiveDate = "July 3, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate={effectiveDate}>
      <LegalSection title="Agreement">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the{" "}
          {companyName} website and any cleaning services provided by{" "}
          {companyLegalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          By using our website or booking services, you agree to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Services">
        <p>
          We provide residential cleaning services in {companyLocation},
          including standard cleaning, deep cleaning, move-in/move-out cleaning,
          and recurring service options. Specific tasks, frequency, and pricing
          are confirmed in writing or by direct communication before service
          begins.
        </p>
      </LegalSection>

      <LegalSection title="Quotes and Scheduling">
        <p>
          Information submitted through our quote form is used to prepare an
          estimate and is not a binding contract until service details, pricing,
          and scheduling are confirmed by both parties. We reserve the right to
          decline service requests outside our service area or scope of work.
        </p>
      </LegalSection>

      <LegalSection title="Access to Your Home">
        <p>
          You agree to provide safe and reasonable access to the areas to be
          cleaned at the scheduled time, including entry instructions, alarm
          codes if needed, and access to water and electricity. You are
          responsible for securing valuables, fragile items, and personal
          belongings before service.
        </p>
      </LegalSection>

      <LegalSection title="Pricing and Payment">
        <p>
          Pricing is based on the scope of work, home size, condition, and
          service type agreed upon before your appointment. Payment terms will
          be communicated at booking. Late cancellations or rescheduling may be
          subject to fees if sufficient notice is not provided.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations and Rescheduling">
        <p>
          Please provide as much notice as possible if you need to cancel or
          reschedule. We may charge a cancellation fee for missed appointments
          or changes made without reasonable notice, especially for reserved time
          slots.
        </p>
      </LegalSection>

      <LegalSection title="Satisfaction and Re-Cleans">
        <p>
          We take pride in quality work. If you are not satisfied with an area
          we cleaned, please contact us within a reasonable time after service
          so we can review the concern. Any remedy, including a return visit,
          will be handled on a case-by-case basis according to the agreed scope
          of work.
        </p>
      </LegalSection>

      <LegalSection title="Damage and Liability">
        <p>
          We exercise care while working in your home and maintain appropriate
          insurance for our operations. Please notify us promptly if you believe
          property damage occurred during service.
        </p>
        <p>
          To the fullest extent permitted by law, our total liability for any
          claim arising from our services is limited to the amount paid for the
          specific service giving rise to the claim. We are not liable for
          pre-existing damage, normal wear, or issues caused by defective
          materials, improper installation, or items not disclosed before
          service.
        </p>
      </LegalSection>

      <LegalSection title="Website Use">
        <p>
          You agree not to misuse this website, attempt unauthorized access to
          our systems, submit false information, or use the site in any way that
          could harm {companyName} or others.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          Our website and its content are provided for general information
          purposes. Service descriptions, photos, and estimates are illustrative
          and may vary based on your home and specific needs.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms are governed by the laws of the Commonwealth of
          Massachusetts, without regard to conflict-of-law principles. Any
          disputes will be handled in courts located in Massachusetts, unless
          otherwise required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. The effective date at the
          top of this page will reflect the latest version. Continued use of our
          website or services after updates are posted constitutes acceptance of
          the revised Terms.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
