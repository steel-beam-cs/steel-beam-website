import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Let's Start the Conversation",
  description:
    "Schedule a free consultation with Steel Beam Contractor Solutions LLC to discuss bookkeeping, payroll, job costing, cleanup, or contractor business support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Let's Start the Conversation"
        title="Every successful partnership begins with understanding your business."
        text="Tell us where you are today, what you need help with, and what success should look like six months from now."
        primaryLabel="Call Steel Beam"
        primaryHref={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
      />

      <section className="section">
        <div className="container contact-layout">
        <form className="consultation-form" action="https://formspree.io/f/mqevrylw" method="POST">
            <div className="form-grid">
              <label>
                Full name
                <input type="text" name="name" />
              </label>
              <label>
                Company name
                <input type="text" name="company" />
              </label>
              <label>
                Email address
                <input type="email" name="email" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" />
              </label>
              <label>
                Contracting trade
                <select name="trade" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>General Contractor</option>
                  <option>Electrical</option>
                  <option>Plumbing</option>
                  <option>HVAC</option>
                  <option>Roofing</option>
                  <option>Concrete</option>
                  <option>Remodeling</option>
                  <option>Specialty Trade</option>
                </select>
              </label>
              <label>
                Years in business
                <select name="years" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Just getting started</option>
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>4-10 years</option>
                  <option>10+ years</option>
                </select>
              </label>
            </div>

            <fieldset>
              <legend>How can we help?</legend>
              {[
                "Monthly Bookkeeping",
                "Catch-Up / Cleanup",
                "Payroll",
                "Job Costing",
                "QuickBooks Setup",
                "Contractor Business Foundation",
                "Financial Reports",
                "Not Sure Yet",
              ].map((item) => (
                <label className="check-label" key={item}>
                  <input type="checkbox" name="services" value={item} />
                  {item}
                </label>
              ))}
            </fieldset>

            <label>
              What prompted you to reach out today?
              <textarea name="message" rows={5} />
            </label>

            <label>
              What would success look like six months from now?
              <textarea name="success" rows={4} />
            </label>

            <label className="check-label">
              <input type="checkbox" name="newsletter" />
              Yes, I would like to receive the Blueprint Brief.
            </label>

            <button className="button button-primary button-large" type="submit">
              Schedule My Free Consultation
            </button>
          </form>

          <aside className="contact-card">
            <h2>What happens next?</h2>
            <ol className="number-list">
              <li>We review your information.</li>
              <li>We contact you within one business day.</li>
              <li>We schedule a consultation.</li>
              <li>We discuss your goals and challenges.</li>
              <li>If we are a good fit, we recommend next steps.</li>
            </ol>
            <hr />
            <p>
              General: <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a>
            </p>
            <p>
              Support: <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a>
            </p>
            <p>
              Billing: <a href={`mailto:${contact.billingEmail}`}>{contact.billingEmail}</a>
            </p>
            <p>Phone: {contact.phone}</p>
          </aside>
        </div>
      </section>

      <CTASection
        title="You do not need every answer before we talk."
        text="Bring your questions, your goals, and your current challenges. We will help identify the next practical step."
      />
    </PageShell>
  );
}

