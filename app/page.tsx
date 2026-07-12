import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { journey, services } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contractor Bookkeeping & Financial Support",
  description:
    "Steel Beam Contractor Solutions LLC helps contractors build stronger businesses through bookkeeping, payroll support, job costing, and practical financial guidance.",
  alternates: {
    canonical: "/",
  },
};

const visitorPaths = [
  {
    label: "I am starting my contracting business.",
    href: "/how-we-help",
  },
  {
    label: "My bookkeeping is behind.",
    href: "/cleanup-bookkeeping",
  },
  {
    label: "I need payroll help.",
    href: "/how-we-help",
  },
  {
    label: "I need better job costing.",
    href: "/contractor-success-center/job-costing-basics",
  },
  {
    label: "I am growing and need better systems.",
    href: "/how-we-help",
  },
  {
    label: "I want a long-term financial partner.",
    href: "/contact",
  },
];

const proofPoints = [
  "Contractor-focused",
  "Secure client portal",
  "Fixed monthly pricing",
  "Built by a former contractor",
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-inner">
          <p className="eyebrow">Construction financial advisory</p>
          <h1 id="hero-title">
            Helping Contractors
            <span>Build Stronger Businesses.</span>
          </h1>
          <p className="hero-copy">
            Professional bookkeeping, payroll, job costing, and financial
            guidance built specifically for contractors.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary button-large" href="/contact">
              Schedule Your Free Consultation
            </Link>
            <Link className="button button-outline button-large" href="/how-we-help">
              Explore Our Services
            </Link>
          </div>

          <div className="trust-row" aria-label="Steel Beam trust markers">
            {proofPoints.map((point) => (
              <article className="trust-card" key={point}>
                <h2>{point}</h2>
                <p>Built to create clarity, confidence, and stronger systems.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Start where you are"
            title="Which best describes you?"
            text="Steel Beam guides contractors to the right next step instead of making them hunt for answers."
          />
          <div className="path-grid">
            {visitorPaths.map((path) => (
              <Link href={path.href} className="path-card" key={path.label}>
                <span>{path.label}</span>
                <strong>Get guidance</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div className="portrait-card">
            <Image
              src="/images/founder-adam-davis.png"
              alt="Adam Davis, founder of Steel Beam Contractor Solutions LLC"
              width={720}
              height={920}
              sizes="260px"
            />
          </div>
          <div>
            <p className="eyebrow dark">Meet your construction financial partner</p>
            <h2>Built by someone who has been in your boots.</h2>
            <p>
              Steel Beam was founded by Adam Davis, a former construction
              company owner and CFO who understands job costing, payroll, cash
              flow, and the pressure of running a construction business because
              he has lived it.
            </p>
            <p className="quote">
              I succeed when my clients succeed. I want to build my company on
              relationships, not sales.
            </p>
            <Link className="text-link" href="/about">
              Read Adam&apos;s story
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we help"
            title="Financial support built around contractor outcomes."
            text="Services are organized around the problems contractors actually need solved: clean books, payroll, job profitability, business setup, and stronger decisions."
          />
          <div className="card-grid three">
            {services.slice(0, 6).map((service) => (
              <Link className="info-card resource-link-card" href={service.href} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>Learn more</span>
              </Link>
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button-secondary" href="/how-we-help">
              See how we help
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="The Steel Beam Client Journey"
            title="A clear process from first conversation to long-term partnership."
            text="Every step is designed to reduce uncertainty and build confidence in your numbers."
          />
          <div className="journey-steel-beam" aria-label="Steel Beam Client Journey stages">
            {journey.map((item, index) => (
              <div className="journey-beam-stage" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </div>
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button-primary" href="/client-journey">
              Explore the journey
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div>
            <p className="eyebrow dark">Contractor Success Center</p>
            <h2>Practical resources before you become a client.</h2>
            <p>
              The Contractor Success Center is designed to teach, guide, and
              provide practical tools for construction business owners who want
              better financial clarity.
            </p>
            <Link className="text-link" href="/contractor-success-center">
              Visit the Success Center
            </Link>
          </div>
          <div className="resource-preview">
            <Link href="/contractor-success-center/cash-flow-vs-revenue">
              <strong>Article</strong>
              <span>Why cash flow matters more than revenue</span>
            </Link>
            <Link href="/contractor-success-center/markup-vs-margin-calculator">
              <strong>Calculator</strong>
              <span>Markup vs. margin calculator</span>
            </Link>
            <Link href="/contractor-success-center/monthly-bookkeeping-checklist">
              <strong>Checklist</strong>
              <span>Monthly bookkeeping checklist</span>
            </Link>
            <Link href="/cleanup-bookkeeping">
              <strong>Cleanup</strong>
              <span>Behind on your books? Start here.</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
