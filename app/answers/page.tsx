import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about working with Steel Beam Contractor Solutions LLC, secure document sharing, payroll, cleanup bookkeeping, pricing, and support.",
  alternates: {
    canonical: "/answers",
  },
};

const faqs = [
  ["How do I become a client?", "It starts with a free consultation. We learn about your business, answer questions, and recommend the right next step."],
  ["Do you only work with contractors?", "Steel Beam was built specifically for contractors and construction-related businesses."],
  ["How do I send documents?", `Use the secure ShareFile portal whenever practical: ${contact.shareFileUrl}`],
  ["Do you offer payroll?", "Yes. Payroll is available as a standalone service and can complement monthly bookkeeping."],
  ["Can you help if my books are behind?", "Yes. Catch-up and cleanup bookkeeping are available after we review the scope."],
  ["Can you help with business startup planning?", "Yes. Contractor Business Foundation helps new and growing contractors establish practical financial systems."],
  ["How much do services cost?", "Monthly packages start at approved fixed prices, with custom quotes when complexity requires it."],
  ["What if I receive an IRS or state notice?", "Upload the notice through ShareFile and contact us promptly. We will review the situation and coordinate with your CPA or attorney when needed."],
  ["What if I do not understand my reports?", "That is exactly why we are here. We explain reports in plain language and connect the numbers to decisions."],
];

export default function AnswersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Answers Before You Need Them"
        title="Clear answers before you choose a bookkeeping partner."
        text="Choosing a financial partner is an important decision. These answers help reduce uncertainty before the first conversation."
      />

      <section className="section">
        <div className="container faq-layout">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-copy">
          <h2>When in doubt, call us.</h2>
          <p>
            We would much rather spend a few minutes answering your question
            today than help resolve a costly problem tomorrow. No question is
            too small when it concerns your business.
          </p>
          <p>
            Email{" "}
            <a className="text-link" href={`mailto:${contact.infoEmail}`}>
              {contact.infoEmail}
            </a>{" "}
            or call {contact.phone}.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

