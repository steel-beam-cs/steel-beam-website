import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Clean Books Readiness Checklist",
  description:
    "A checklist to help contractors decide whether their books are ready for monthly bookkeeping, cleanup, CPA review, or financial reporting.",
  alternates: {
    canonical: "/contractor-success-center/clean-books-readiness-checklist",
  },
};

const readinessItems = [
  "All business bank and credit card accounts are identified.",
  "Statements are available for every month being reviewed.",
  "Personal and business activity are reasonably separated.",
  "Major loans, equipment notes, and credit lines are documented.",
  "Customer invoices and deposits can be matched to bank activity.",
  "Vendor bills, subcontractor invoices, and receipts are available.",
  "Payroll reports are available for the period being reviewed.",
  "Open questions and uncategorized transactions can be reviewed.",
  "The bookkeeping file has a chart of accounts that fits contractor activity.",
  "Reports can be reviewed with your CPA or financial professional when needed.",
];

export default function CleanBooksReadinessPage() {
  return (
    <PageShell currentPath="/contractor-success-center/clean-books-readiness-checklist">
      <PageHero
        eyebrow="Success Center"
        title="Clean books readiness checklist."
        text="Use this checklist to see whether your records are ready for monthly bookkeeping, cleanup work, or CPA review."
      />

      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Clean books do not happen by accident. They come from consistent
            records, clear accounts, complete statements, and a process for
            resolving questions.
          </p>

          <div className="checklist-panel">
            {readinessItems.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <h2>If several boxes are unchecked</h2>
          <p>
            That does not mean anything is hopeless. It usually means cleanup
            work or a better monthly document process may be needed before
            reports can be trusted.
          </p>

          <p>
            <Link className="text-link" href="/cleanup-bookkeeping">
              Learn about cleanup bookkeeping
            </Link>
          </p>
        </article>
      </section>

      <CTASection />
    </PageShell>
  );
}
