import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contractor Success Center",
  description:
    "Practical resources, checklists, insights, and tools to help contractors improve bookkeeping, cash flow, job costing, and business systems.",
  alternates: {
    canonical: "/contractor-success-center",
  },
};

const centers = [
  {
    title: "The Steel Beam Knowledge Center",
    text: "Practical articles on financial management, job costing, cash flow, payroll, growth, and construction bookkeeping.",
  },
  {
    title: "The Steel Beam Blueprint Library",
    text: "Downloadable checklists, worksheets, startup guides, and monthly review tools for contractors.",
  },
  {
    title: "Contractor Calculators",
    text: "Planned tools for profit margin, break-even analysis, labor burden, markup vs. margin, and cash flow planning.",
  },
  {
    title: "Planning Center",
    text: "Tax calendars, payroll reminders, year-end checklists, and quarterly planning resources.",
  },
  {
    title: "Blueprint Brief",
    text: "A practical monthly email with one business tip, one financial reminder, one resource, and one Steel Beam Insight.",
  },
  {
    title: "Contractor Success Stories",
    text: "Coming soon: client stories showing how organized financial systems helped contractors gain clarity and confidence.",
  },
];

const featuredResources = [
  {
    type: "Article",
    title: "Why cash flow matters more than revenue",
    text: "A practical explanation of why contractors can look profitable on paper and still feel cash tight.",
    href: "/contractor-success-center/cash-flow-vs-revenue",
  },
  {
    type: "Calculator",
    title: "Markup vs. margin calculator",
    text: "Estimate selling price, gross profit, and margin before you send the next bid.",
    href: "/contractor-success-center/markup-vs-margin-calculator",
  },
  {
    type: "Checklist",
    title: "Monthly bookkeeping checklist",
    text: "A simple month-end checklist for keeping contractor books organized and ready for review.",
    href: "/contractor-success-center/monthly-bookkeeping-checklist",
  },
];

export default function SuccessCenterPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contractor Success Center"
        title="Knowledge, tools, and resources built for contractors."
        text="The Contractor Success Center is designed to provide practical guidance before, during, and after a client relationship begins."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Learn first"
            title="A resource center built around relationship-first marketing."
            text="Steel Beam's 80/20 content principle is simple: educate first, invite second."
          />
          <div className="card-grid three">
            {centers.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Featured resources"
            title="Start with these contractor business tools."
            text="These first resources are designed to be practical, direct, and useful before a consultation ever begins."
          />
          <div className="card-grid three">
            {featuredResources.map((resource) => (
              <Link className="info-card resource-link-card" href={resource.href} key={resource.title}>
                <strong>{resource.type}</strong>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <span>Open resource</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Featured resource</p>
            <h2>Monthly Bookkeeping Checklist</h2>
            <p>
              A planned downloadable checklist to help contractors stay current,
              organized, and prepared for monthly financial reporting.
            </p>
          </div>
          <form className="inline-form" action="https://formspree.io/f/mqevryyw" method="POST">
            <label htmlFor="brief-email">Get the Blueprint Brief</label>
            <input
  id="brief-email"
  name="email"
  type="email"
  placeholder="Email address"
  required
/>
            <button className="button button-primary" type="submit">
              Join the list
            </button>
          </form>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
