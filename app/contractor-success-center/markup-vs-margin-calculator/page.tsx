import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { MarkupMarginCalculator } from "@/components/MarkupMarginCalculator";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Markup vs. Margin Calculator",
  description:
    "Use this contractor-focused calculator to estimate selling price, gross profit, and margin from job cost and markup.",
  alternates: {
    canonical: "/contractor-success-center/markup-vs-margin-calculator",
  },
};

export default function MarkupVsMarginCalculatorPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contractor Calculator"
        title="Markup and margin are not the same thing."
        text="Use this quick calculator to see how job cost and markup translate into selling price, gross profit, and profit margin."
        secondaryLabel="Back to Success Center"
        secondaryHref="/contractor-success-center"
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Bid with clearer numbers</p>
            <h2>Estimate the difference before you price the job.</h2>
            <p>
              Markup is the percentage added on top of cost. Margin is the
              percentage of the final selling price that remains as gross
              profit. Confusing the two can quietly shrink job profitability.
            </p>
            <p>
              This tool is for planning and education. It does not replace a
              full job-costing process, but it can help contractors think more
              clearly before sending the next proposal.
            </p>
          </div>
          <MarkupMarginCalculator />
        </div>
      </section>

      <CTASection
        title="Want clearer job profitability?"
        text="Steel Beam helps contractors organize job costs, reports, and monthly financial reviews so pricing decisions are easier to understand."
      />
    </PageShell>
  );
}
