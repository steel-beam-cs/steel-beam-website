import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Steel Beam Contractor Solutions LLC. We will review your consultation request and follow up soon.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <PageShell currentPath="/thank-you">
      <section className="page-hero">
        <div className="blueprint-grid" />
        <div className="container page-hero-inner">
          <p className="eyebrow">Consultation Request Received</p>
          <h1>Thank you for reaching out.</h1>
          <p>
            Your request has been sent to Steel Beam Contractor Solutions LLC.
            We will review your information and follow up within one business
            day.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href="/contractor-success-center">
              Visit the Success Center
            </Link>
            <Link className="button button-outline button-large" href="/">
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="panel">
            <h2>What happens next?</h2>
            <ol className="number-list">
              <li>We review your request and the services you selected.</li>
              <li>We contact you to schedule the consultation.</li>
              <li>We talk through your current books, goals, and pain points.</li>
              <li>If Steel Beam is a good fit, we recommend a practical next step.</li>
            </ol>
          </div>

          <aside className="contact-card">
            <h2>Need something sooner?</h2>
            <p>
              If your request is time-sensitive, call {contact.phone} or email{" "}
              <a className="text-link" href={`mailto:${contact.infoEmail}`}>
                {contact.infoEmail}
              </a>
              .
            </p>
            <hr />
            <p>
              Secure documents should be shared through the{" "}
              <Link className="text-link" href="/client-portal">
                Steel Beam Client Portal
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
