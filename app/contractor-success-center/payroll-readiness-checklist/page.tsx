import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contractor Payroll Readiness Checklist",
  description:
    "A payroll readiness checklist for contractors preparing employee payroll, subcontractor tracking, timecards, and payroll support.",
  alternates: {
    canonical: "/contractor-success-center/payroll-readiness-checklist",
  },
};

const payrollItems = [
  "Confirm whether each worker is an employee or subcontractor with your tax professional when needed.",
  "Collect W-4s, I-9s, W-9s, and direct deposit details before work begins.",
  "Choose a consistent payroll schedule.",
  "Create a timecard process for crews, jobs, and project labor tracking.",
  "Track reimbursements, bonuses, advances, deductions, and garnishments separately.",
  "Keep payroll reports organized for bookkeeping and CPA review.",
  "Confirm workers compensation and insurance requirements.",
  "Decide whether certified payroll or prevailing wage reporting applies.",
];

export default function PayrollReadinessChecklistPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Success Center"
        title="Contractor payroll readiness checklist."
        text="Payroll gets easier when the records, worker details, and timecard process are organized before the first run."
      />

      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Payroll is a standalone Steel Beam service because contractors may
            need different levels of support depending on crew size, pay
            frequency, and reporting requirements.
          </p>

          <div className="checklist-panel">
            {payrollItems.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <h2>Why this matters</h2>
          <p>
            Payroll touches cash flow, job costing, employee trust, and tax
            compliance. A clear process helps reduce missed time, rushed
            corrections, and incomplete labor-cost records.
          </p>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              If payroll labor is not connected to the right jobs, project
              profitability can look better or worse than it really is.
            </p>
          </div>

          <p>
            <Link className="text-link" href="/contact">
              Ask about payroll support
            </Link>
          </p>
        </article>
      </section>

      <CTASection />
    </PageShell>
  );
}
