import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/components/site-data";

const packages = [
  {
    title: "Foundation",
    price: "Starting at $350/month",
    text: "Monthly bookkeeping, reconciliations, financial statements, monthly review, and email support.",
  },
  {
    title: "Structural",
    price: "Starting at $650/month",
    text: "Foundation plus accounts payable, accounts receivable, sales tax tracking, monthly review meetings, and priority support.",
  },
  {
    title: "Steel Advantage",
    price: "Starting at $995/month",
    text: "Structural plus job costing, project profitability reports, cash flow forecasting, budget assistance, and CPA year-end package support.",
  },
];

export default function HowWeHelpPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How We Help"
        title="Financial support built around the way contractors actually work."
        text="We do not simply reconcile accounts. We help contractors organize records, understand job profitability, manage payroll, and make stronger decisions."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core services"
            title="Choose the support your business needs now."
            text="Each service is built to create clarity, reduce stress, and support long-term growth."
          />
          <div className="card-grid three">
            {services.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="mini-note">This may be right for you if you want more confidence in your numbers.</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Monthly packages"
            title="Fixed monthly pricing with custom quotes when needed."
          />
          <div className="card-grid three">
            {packages.map((item) => (
              <article className="pricing-card" key={item.title}>
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow dark">Contractor Business Foundation</p>
          <h2>Start strong. Build smart. Grow with confidence.</h2>
          <p>
            This advisory service helps new and growing contractors establish
            practical financial systems from day one, including QuickBooks
            setup, chart of accounts design, invoice workflows, recordkeeping,
            secure document organization, and bookkeeping process planning.
          </p>
          <p>
            Steel Beam does not provide legal or tax advice. When appropriate,
            we coordinate with your CPA or attorney so your business is
            supported by the right professional team.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

