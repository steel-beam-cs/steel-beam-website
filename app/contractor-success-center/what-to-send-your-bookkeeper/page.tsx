import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "What to Send Your Bookkeeper Each Month",
  description:
    "A practical monthly document checklist for contractors working with a bookkeeper, including statements, receipts, invoices, payroll, and job records.",
  alternates: {
    canonical: "/contractor-success-center/what-to-send-your-bookkeeper",
  },
};

const documents = [
  "Bank statements for all business checking and savings accounts",
  "Credit card statements for all business cards",
  "Loan, equipment financing, and line-of-credit statements",
  "Receipts for materials, tools, fuel, meals, travel, and jobsite expenses",
  "Customer invoices, deposits, retainage, draws, and payment records",
  "Vendor bills, subcontractor invoices, lien waivers, and payment support",
  "Payroll reports, contractor payment details, and time records when applicable",
  "Job names, project numbers, change orders, and cost notes",
  "Sales tax reports or taxable sales details when applicable",
  "Questions about unclear transactions before the month is closed",
];

export default function WhatToSendBookkeeperPage() {
  return (
    <PageShell currentPath="/contractor-success-center/what-to-send-your-bookkeeper">
      <PageHero
        eyebrow="Success Center"
        title="What to send your bookkeeper each month."
        text="Cleaner monthly records start with a consistent document flow."
      />

      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Your bookkeeping is only as strong as the records behind it. A clear
            monthly upload routine helps keep reports accurate and reduces
            last-minute questions.
          </p>

          <div className="checklist-panel">
            {documents.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <h2>Best practice</h2>
          <p>
            Upload documents monthly instead of waiting until tax season. For
            contractors, waiting too long makes it harder to remember which
            receipt, vendor, or charge belongs to which project.
          </p>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              A good document habit is one of the easiest ways to improve job
              costing, cash flow reviews, and year-end CPA coordination.
            </p>
          </div>

          <p>
            <Link className="text-link" href="/client-portal">
              See secure document sharing
            </Link>
          </p>
        </article>
      </section>

      <CTASection />
    </PageShell>
  );
}
