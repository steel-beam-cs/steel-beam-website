import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

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
    text: "Future tools for profit margin, break-even analysis, labor burden, markup vs. margin, and cash flow planning.",
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
    text: "Future client stories showing how organized financial systems helped contractors gain clarity and confidence.",
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
        <div className="container split">
          <div>
            <p className="eyebrow dark">Featured resource</p>
            <h2>Monthly Bookkeeping Checklist</h2>
            <p>
              A future downloadable checklist to help contractors stay current,
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

