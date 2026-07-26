import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Job Costing Basics for Contractors",
  description:
    "A practical guide to job costing basics for contractors, including labor, materials, subcontractors, equipment, overhead, and project profitability.",
  alternates: {
    canonical: "/contractor-success-center/job-costing-basics",
  },
};

const costBuckets = [
  "Labor directly tied to the job",
  "Materials and supplies",
  "Subcontractor costs",
  "Equipment, rentals, fuel, and jobsite expenses",
  "Permits, fees, disposal, and project-specific costs",
  "Allocated overhead when appropriate",
];

export default function JobCostingBasicsPage() {
  return (
    <PageShell currentPath="/contractor-success-center/job-costing-basics">
      <PageHero
        eyebrow="Success Center"
        title="Job costing basics for contractors."
        text="Job costing helps you answer a critical question: did this project actually make money?"
      />

      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Revenue tells you how much work came in. Job costing helps you
            understand whether the work was profitable after the real costs were
            counted.
          </p>

          <h2>What job costing tracks</h2>
          <p>
            A useful job-costing process groups project activity by job so you
            can compare estimated costs, actual costs, billed amounts, and gross
            profit. For contractors, this often includes:
          </p>
          <ul className="resource-list">
            {costBuckets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              The goal is not to create complicated reports. The goal is to
              identify which jobs support the business and which jobs quietly
              drain cash, time, and margin.
            </p>
          </div>

          <h2>Why it matters</h2>
          <p>
            Without job costing, a contractor may know total sales and total
            expenses, but still not know which projects performed well. That can
            lead to underbidding, missed change orders, payroll pressure, and
            jobs that look busy but do not create enough profit.
          </p>

          <h2>Where to start</h2>
          <p>
            Start simple: assign income and direct costs to each job as
            consistently as possible. Then review project profitability monthly
            instead of waiting until year-end.
          </p>

          <p>
            <Link className="text-link" href="/contact">
              Ask about job costing support
            </Link>
          </p>
        </article>
      </section>

      <CTASection />
    </PageShell>
  );
}
