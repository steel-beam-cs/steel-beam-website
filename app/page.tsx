import Image from "next/image";

const trustMarkers = [
  {
    title: "Contractor Focused",
    text: "Financial support built around the way construction businesses work.",
  },
  {
    title: "Secure & Confidential",
    text: "A professional document process for sensitive business records.",
  },
  {
    title: "Experienced Leadership",
    text: "Built by someone who has managed projects, crews, cash flow, and growth.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Steel Beam home">
            <Image
              src="/images/steel-beam-logo.png"
              alt="Steel Beam Contractor Solutions LLC"
              width={380}
              height={96}
              priority
            />
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">How We Help</a>
            <a href="#resources">Success Center</a>
            <a href="#journey">Client Journey</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a
              className="button button-portal"
              href="https://steelbeam.sharefile.com"
              target="_blank"
              rel="noreferrer"
            >
              Client Portal
            </a>
            <a className="button button-primary" href="#contact">
              Free Consultation
            </a>
          </div>
        </div>
      </header>

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
            <a className="button button-primary button-large" href="#contact">
              Schedule Your Free Consultation
            </a>
            <a className="button button-outline button-large" href="#services">
              Explore Our Services
            </a>
          </div>

          <div className="trust-row" aria-label="Steel Beam trust markers">
            {trustMarkers.map((marker) => (
              <article className="trust-card" key={marker.title}>
                <h2>{marker.title}</h2>
                <p>{marker.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
