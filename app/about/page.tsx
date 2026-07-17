import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { values } from "@/components/site-data";

export const metadata: Metadata = {
  title: "About Steel Beam",
  description:
    "Learn how Steel Beam Contractor Solutions LLC was built from construction experience, financial leadership, and a commitment to helping contractors strengthen their businesses.",
  alternates: {
    canonical: "/about",
  },
};

const milestones = [
  "United States Army service",
  "Mathematics studies",
  "Tower construction and project management",
  "Construction oversight and contractor payment review",
  "Partner and CFO of a $10M+ construction company",
  "Founder of Steel Beam Contractor Solutions LLC",
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Steel Beam"
        title="Built by someone who has been in your boots."
        text="Steel Beam was built from construction experience, financial leadership, hard-earned lessons, and a commitment to helping contractors build stronger businesses."
        secondaryLabel="How We Help"
        secondaryHref="/how-we-help"
      />

      <section className="section">
        <div className="container split">
          <div className="portrait-card">
            <Image
              src="/images/founder-adam-davis.png"
              alt="Adam Davis in a contractor financial workspace"
              width={720}
              height={920}
            />
          </div>
          <div>
            <p className="eyebrow dark">Meet Adam Davis</p>
            <h2>From soldier to contractor to financial partner.</h2>
            <p>
              Adam Davis founded Steel Beam Contractor Solutions LLC after a
              career shaped by military service, mathematics, hands-on
              construction, project management, construction oversight, and
              financial leadership.
            </p>
            <p>
              As a partner and CFO of a construction company that grew beyond
              $10 million in annual revenue, Adam managed bookkeeping, payroll,
              job costing, cash flow, reporting, and strategic financial
              decisions from the owner&apos;s seat.
            </p>
            <p>
              That construction experience remains the foundation of Steel
              Beam&apos;s work. Adam is also Intuit Bookkeeping Certified and
              continues professional education through Intuit Academy while
              working toward QuickBooks ProAdvisor certification.
            </p>
            <p className="quote">
              Steel Beam was not built from theory. It was built from
              experience, adversity, and a commitment to helping contractors
              avoid mistakes I had to learn the hard way.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Experience that matters"
            title="Every step prepared Steel Beam to serve contractors."
          />
          <div className="timeline">
            {milestones.map((item) => (
              <article key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container credential-section">
          <div>
            <p className="eyebrow dark">Professional Credentials</p>
            <h2>Construction Experience + Certified Bookkeeping Expertise.</h2>
            <p>
              The credential is third-party validation of bookkeeping training;
              the deeper value is Adam&apos;s practical experience managing
              contractor books, payroll, job costing, reporting, and cash flow
              from inside a construction business.
            </p>
            <ul className="credential-list">
              <li>Intuit Bookkeeping Certified</li>
              <li>Continuing professional education through Intuit Academy</li>
              <li>Working toward QuickBooks ProAdvisor certification</li>
            </ul>
            <p className="credential-disclaimer">
              Intuit and QuickBooks are trademarks of Intuit Inc. Used here only
              to identify earned training and education; no endorsement or
              partnership is implied.
            </p>
          </div>
          <div className="credential-badge" aria-label="Intuit Bookkeeping Certified badge">
            <Image
              src="/images/intuit-bookkeeping-certification.png"
              alt="Intuit Bookkeeping certification badge"
              width={320}
              height={320}
              sizes="160px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Why Steel Beam exists</h2>
          <p>
            Many contractors are exceptional builders but were never taught how
            to build the financial side of their business. Steel Beam exists to
            help close that gap through honest guidance, dependable financial
            systems, and long-term partnerships founded on integrity, respect,
            and trust.
          </p>
          <p>
            The company was created to be the kind of financial partner Adam
            wishes every contractor had: practical, organized, fair, and
            genuinely invested in the client&apos;s success.
          </p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The values that guide every client relationship."
          />
          <div className="card-grid five">
            {values.map((value) => (
              <article className="value-card" key={value}>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
