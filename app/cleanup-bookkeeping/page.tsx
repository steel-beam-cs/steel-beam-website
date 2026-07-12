import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Cleanup Bookkeeping for Contractors",
  description:
    "Behind on bookkeeping? Steel Beam helps contractors rebuild records, reconcile accounts, organize documents, and prepare cleaner books without judgment.",
  alternates: {
    canonical: "/cleanup-bookkeeping",
  },
};

const cleanupIncludes = [
  "Reviewing the current bookkeeping file and identifying problem areas.",
  "Organizing bank, credit card, loan, payroll, vendor, and customer records.",
  "Categorizing income and expenses using a contractor-aware chart of accounts.",
  "Reconciling bank and credit card accounts for the cleanup period.",
  "Flagging missing documents, unclear transactions, duplicates, and possible errors.",
  "Preparing cleaner financial reports for your records, CPA, lender, or next stage of service.",
];

const whenItFits = [
  "You are several months behind.",
  "Your books were started but never fully maintained.",
  "Bank accounts are connected but transactions were not reviewed.",
  "Your CPA asked for cleaner records before tax work can begin.",
  "You are not sure whether your reports are accurate.",
  "You want to move into monthly bookkeeping with a clean starting point.",
];

const process = [
  {
    title: "Books Review",
    text: "We look at the current file, accounts, statements, transaction volume, and available records.",
  },
  {
    title: "Cleanup Plan",
    text: "You receive a clear scope, timeline, and quote based on how many months need to be rebuilt.",
  },
  {
    title: "Document Collection",
    text: "We gather statements, receipts, invoices, payroll records, loan documents, and open questions.",
  },
  {
    title: "Rebuild & Reconcile",
    text: "Transactions are categorized, accounts are reconciled, and issues are documented as we work.",
  },
  {
    title: "Review & Next Steps",
    text: "You receive cleaned reports, notes, and a recommendation for staying current going forward.",
  },
];

export default function CleanupBookkeepingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Cleanup Bookkeeping"
        title="Behind on your books? We can help rebuild the records."
        text="Cleanup bookkeeping gives contractors a practical path from financial uncertainty to organized records, clearer reports, and a stronger monthly process."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">No judgment. Just structure.</p>
            <h2>Cleanup work is not about blame. It is about rebuilding confidence.</h2>
            <p>
              Many contractors fall behind because they are busy building, managing
              crews, chasing payments, and keeping projects moving. Steel Beam helps
              organize what happened, identify what is missing, and rebuild the
              books in a way that supports better decisions going forward.
            </p>
            <p>
              Cleanup work is typically quoted by the month because every business
              has different transaction volume, records, software history, and
              complexity.
            </p>
          </div>
          <aside className="panel price-panel">
            <span className="status-pill">Starting point</span>
            <h3>$250 per month needing cleanup</h3>
            <p>
              Annual cleanup projects may be quoted at $2,500 when the scope is
              straightforward. Complex files, missing records, multiple entities,
              payroll issues, sales tax concerns, or heavy job-costing cleanup may
              require a custom quote.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="What it includes"
            title="A practical cleanup scope for contractor books."
            text="The goal is to turn scattered records into a cleaner, more usable bookkeeping file."
          />
          <div className="card-grid three">
            {cleanupIncludes.map((item) => (
              <article className="info-card compact" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="When cleanup fits"
            title="This service is built for contractors who need a reset."
          />
          <div className="card-grid three">
            {whenItFits.map((item) => (
              <article className="info-card compact" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Cleanup process"
            title="A clear path from messy records to usable reports."
            text="Cleanup work works best when expectations are clear from the beginning."
          />
          <div className="journey-beam detailed">
            {process.map((item, index) => (
              <article className="journey-step" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow dark">Important expectations</p>
          <h2>Cleanup is a bookkeeping service, not tax or legal advice.</h2>
          <p>
            Steel Beam can help organize records, reconcile accounts, identify
            questions, and prepare cleaner reports. Tax filing positions,
            amended returns, entity matters, and legal questions should be
            reviewed with your CPA or attorney.
          </p>
          <p>
            The best next step is a consultation and books review so we can
            understand the current state of your records before quoting the
            cleanup.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href="/contact">
              Request a Cleanup Review
            </Link>
            <Link className="button button-secondary button-large" href="/contractor-success-center/what-to-send-your-bookkeeper">
              See What Records Help
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's get your books back on track."
        text="If your records are behind, Steel Beam can help you understand the scope, rebuild the foundation, and move toward a cleaner monthly process."
      />
    </PageShell>
  );
}
