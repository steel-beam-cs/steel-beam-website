import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Monthly Bookkeeping Checklist",
  description:
    "A practical monthly bookkeeping checklist for contractors who want cleaner records, better reporting, and fewer surprises.",
  alternates: {
    canonical: "/contractor-success-center/monthly-bookkeeping-checklist",
  },
};

const checklist = [
  "Download bank and credit card statements.",
  "Upload receipts, invoices, payroll reports, and tax notices.",
  "Confirm all customer invoices have been sent.",
  "Review unpaid customer invoices and follow up on past-due balances.",
  "Review vendor bills and upcoming payment dates.",
  "Separate personal and business transactions.",
  "Confirm job names, customer names, and project categories are consistent.",
  "Review material, labor, subcontractor, equipment, and fuel costs by job.",
  "Reconcile bank and credit card accounts.",
  "Review the Profit and Loss, Balance Sheet, and open receivables.",
  "Flag unusual expenses, missing documents, or job-cost questions.",
  "Save a monthly reporting package for your records.",
];

export default function MonthlyBookkeepingChecklistPage() {
  return (
    <PageShell currentPath="/contractor-success-center/monthly-bookkeeping-checklist">
      <PageHero
        eyebrow="Contractor Checklist"
        title="Monthly bookkeeping checklist for contractors."
        text="A simple month-end rhythm helps keep records current, reports useful, and financial surprises smaller."
        secondaryLabel="Back to Success Center"
        secondaryHref="/contractor-success-center"
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Month-end rhythm</p>
            <h2>Use this checklist before your monthly close.</h2>
            <p>
              Contractor books get messy when documents, job costs, invoices,
              and payments are reviewed only when tax season arrives. A simple
              monthly process creates cleaner reports and better decisions.
            </p>
            <p>
              Use this page as a working checklist now. A downloadable version
              can be added later as the Steel Beam Blueprint Library grows.
            </p>
            <Link className="button button-primary" href="/contact">
              Get help organizing your books
            </Link>
          </div>

          <div className="checklist-panel">
            {checklist.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-copy">
          <h2>Cleaner books create better conversations.</h2>
          <p>
            When records are organized every month, financial reviews become
            more useful. You can talk about margins, cash flow, job performance,
            and next steps instead of hunting for missing paperwork.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
