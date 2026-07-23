import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { companyLegalName, companyName } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Simply Spotless Cleaning Services collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const effectiveDate = "July 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate={effectiveDate}>
      <LegalSection title="Overview">
        <p>
          {companyName} ({companyLegalName}) respects your privacy. This Privacy
          Policy explains what information we collect when you visit our website
          or request a cleaning quote, how we use it, and the choices you have.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>
          When you submit a quote request or contact us through this website, we
          may collect:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Name and contact details (email address and phone number)</li>
          <li>Town or service area</li>
          <li>
            Service details such as desired cleaning type, approximate square
            footage, preferred contact method, and how you heard about us
          </li>
          <li>Any message or notes you choose to include</li>
        </ul>
        <p>
          We may also collect basic technical information when you browse our
          site, such as browser type, device information, and pages visited,
          through standard server logs or analytics tools if enabled.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to quote requests and follow up about cleaning services</li>
          <li>Schedule, confirm, and manage appointments</li>
          <li>Communicate with you by phone, email, or text as requested</li>
          <li>Improve our website and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for marketing
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="How We Share Information">
        <p>
          We share information only when needed to operate our business or meet
          legal requirements. This may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Service providers that help us send emails, host our website, or
            support business operations
          </li>
          <li>Legal or regulatory authorities when required by law</li>
        </ul>
        <p>
          Quote form submissions are delivered to our business email so we can
          respond to your request.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We keep your information for as long as needed to respond to inquiries,
          provide services, maintain business records, and comply with applicable
          laws. When information is no longer needed, we take reasonable steps to
          delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use reasonable administrative and technical safeguards to protect
          your information. However, no method of transmission over the internet
          or electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Your Choices">
        <p>You may:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request access to or correction of your personal information</li>
          <li>Ask us to stop marketing communications</li>
          <li>Decline to provide optional information on our forms</li>
        </ul>
        <p>
          To make a privacy-related request, contact us using the information at
          the bottom of this page.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <p>
          Our website may link to third-party sites, such as social media pages.
          We are not responsible for the privacy practices of those sites and
          encourage you to review their policies separately.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our services are intended for adults requesting home cleaning services.
          We do not knowingly collect personal information from children under
          13. If you believe a child has provided us information, please contact
          us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the effective date at the top of this page. Continued use
          of our website after changes are posted means you accept the updated
          policy.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
