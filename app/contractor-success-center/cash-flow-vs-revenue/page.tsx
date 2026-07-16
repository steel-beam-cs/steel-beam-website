import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Why Cash Flow Matters More Than Revenue",
  description:
    "Learn why contractors can have strong revenue and still struggle with cash flow, and what to watch before the next job starts.",
  alternates: {
    canonical: "/contractor-success-center/cash-flow-vs-revenue",
  },
};

export default function CashFlowVsRevenuePage() {
  return (
    <PageShell currentPath="/contractor-success-center/cash-flow-vs-revenue">
      <PageHero
        eyebrow="Contractor Success Center"
        title="Why cash flow matters more than revenue."
        text="Revenue tells you how much work came in. Cash flow tells you whether the business can keep operating while the work gets done."
        secondaryLabel="Back to Success Center"
        secondaryHref="/contractor-success-center"
      />

      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Contractors can be busy, booked, and still cash tight. That does not
            always mean the company is failing. It often means money is moving
            through the business at the wrong speed.
          </p>

          <h2>Revenue is not the same as usable cash</h2>
          <p>
            Revenue measures sales. Cash flow measures timing. A contractor may
            invoice a large job this month, pay labor and materials this week,
            and not collect from the customer for 30, 45, or 60 days. On paper,
            the job may look strong. In the bank account, it may feel very
            different.
          </p>

          <h2>Common cash flow pressure points</h2>
          <ul className="resource-list">
            <li>Material costs paid before customer payments arrive.</li>
            <li>Payroll due every week or two, regardless of collection timing.</li>
            <li>Change orders completed before they are documented or approved.</li>
            <li>Retainage, slow pay, or delayed draws on larger projects.</li>
            <li>Equipment, fuel, insurance, and tax obligations hitting at once.</li>
          </ul>

          <h2>What stronger cash flow visibility looks like</h2>
          <p>
            Better cash flow starts with current books, clean job costing, clear
            accounts receivable, and a simple rhythm for reviewing what is due,
            what is owed, and what is coming next.
          </p>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              A growing contractor does not just need more revenue. The business
              needs enough financial visibility to know which jobs are creating
              cash, which jobs are consuming it, and when the next pressure point
              is coming.
            </p>
          </div>

          <h2>Three questions to ask this month</h2>
          <ol className="number-list">
            <li>Which invoices are past due?</li>
            <li>Which jobs have costs that are rising faster than expected?</li>
            <li>What bills, payroll, tax payments, or renewals are due soon?</li>
          </ol>

          <p>
            If those answers are hard to find, the next step is not panic. The
            next step is building a better financial process.
          </p>

          <Link className="button button-primary button-large" href="/contact">
            Talk through your cash flow
          </Link>
        </article>
      </section>

      <CTASection />
    </PageShell>
  );
}
