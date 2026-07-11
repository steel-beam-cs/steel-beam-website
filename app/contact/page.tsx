import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Let's Start the Conversation",
  description:
    "Schedule a free consultation with Steel Beam Contractor Solutions LLC to discuss bookkeeping, payroll, job costing, cleanup, or contractor business support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Let's Start the Conversation"
        title="Every successful partnership begins with understanding your business."
        text="Tell us where you are today, what you need help with, and what success should look like six months from now."
        primaryLabel="Call Steel Beam"
        primaryHref={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
      />

      <section className="section">
        <div className="container contact-layout">
          <ConsultationForm />

          <aside className="contact-card">
            <h2>What happens next?</h2>
            <ol className="number-list">
              <li>We review your information.</li>
              <li>We contact you within one business day.</li>
              <li>We schedule a consultation.</li>
              <li>We discuss your goals and challenges.</li>
              <li>If we are a good fit, we recommend next steps.</li>
            </ol>
            <hr />
            <p>
              General: <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a>
            </p>
            <p>
              Support: <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a>
            </p>
            <p>
              Billing: <a href={`mailto:${contact.billingEmail}`}>{contact.billingEmail}</a>
            </p>
            <p>Phone: {contact.phone}</p>
          </aside>
        </div>
      </section>

      <CTASection
        title="You do not need every answer before we talk."
        text="Bring your questions, your goals, and your current challenges. We will help identify the next practical step."
      />
    </PageShell>
  );
}
