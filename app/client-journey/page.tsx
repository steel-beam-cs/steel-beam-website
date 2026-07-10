import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { journey } from "@/components/site-data";

export default function ClientJourneyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Steel Beam Client Journey"
        title="A clear process for building stronger financial systems."
        text="Hiring a bookkeeping partner should not feel confusing. The Steel Beam Client Journey gives contractors a structured path from first conversation to long-term partnership."
      />

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Six phases"
            title="Every strong structure begins with a plan."
          />
          <div className="client-journey-structure" aria-label="The six phases of the Steel Beam Client Journey">
            <div className="steel-beam-top" aria-hidden="true">
              <span />
              <strong>The Steel Beam Client Journey</strong>
              <span />
            </div>

            <div className="journey-support-grid">
            {journey.map((item, index) => (
              <article className="journey-support" key={item.title}>
                <div className="support-column" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="support-footing" aria-hidden="true" />
                <div className="journey-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.subtitle}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
            </div>

            <div className="steel-beam-base" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Where are you today?"
            title="We meet contractors where they are."
          />
          <div className="card-grid three">
            {[
              "Starting a business",
              "Behind on bookkeeping",
              "Growing faster than your systems",
              "Need payroll help",
              "Unsure which jobs are profitable",
              "Want organized books and peace of mind",
            ].map((item) => (
              <article className="info-card compact" key={item}>
                <h3>{item}</h3>
                <p>We will help identify the next best step for your business.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-copy">
          <h2>Success should feel practical.</h2>
          <p>
            By the end of the journey, our goal is for every client to have
            organized records, reliable monthly reporting, better visibility
            into profitability, more confidence in their numbers, and a trusted
            financial partner.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
