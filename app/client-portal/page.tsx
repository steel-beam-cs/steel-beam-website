import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { clientPortalNotice, contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Steel Beam Client Portal",
  description: clientPortalNotice,
  alternates: {
    canonical: "/client-portal",
  },
};

const uploads = [
  "Bank statements",
  "Credit card statements",
  "Payroll reports",
  "Tax notices",
  "Vendor invoices",
  "Customer invoices",
  "Receipts",
  "Equipment purchase records",
];

export default function ClientPortalPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Existing Client Portal Access & Help"
        title="Steel Beam Client Portal"
        text={clientPortalNotice}
        primaryLabel="Email Adam for Access Help"
        primaryHref={`mailto:${contact.founderEmail}`}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="status-pill">Private Invitations Only</p>
            <h2>How portal access works</h2>
            <p>
              Steel Beam creates a separate client-facing portal for each
              active client and sends access only to the authorized email
              address. There is no public Google Drive folder link.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${contact.founderEmail}`}
            >
              Email Adam for portal help
            </a>
          </div>
          <div className="panel">
            <h3>Invitation and access guide</h3>
            <ol className="number-list">
              <li>Look for a Google Drive invitation email from Steel Beam.</li>
              <li>Open the invitation using the email address it was sent to.</li>
              <li>Follow Google&apos;s sign-in or verification instructions.</li>
              <li>Use the shared folders for uploads, reports, and resources.</li>
              <li>Contact support if the invitation is missing or access fails.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="What can I upload?"
            title="Use the portal for sensitive business records."
          />
          <div className="tag-grid">
            {uploads.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>The Steel Beam Security Promise</h2>
          <p>
            We protect your confidentiality, use secure technology, verify
            unusual requests, communicate promptly if concerns arise, and
            continuously improve our security practices.
          </p>
          <p>
            For access assistance, contact:
          </p>
          <p>
            <strong>Adam Davis</strong>
            <br />
            Steel Beam Contractor Solutions LLC
            <br />
            <a className="text-link" href={`mailto:${contact.founderEmail}`}>
              {contact.founderEmail}
            </a>
            <br />
            <a
              className="text-link"
              href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            >
              {contact.phone}
            </a>
          </p>
        </div>
      </section>

      <CTASection
        title="Need help accessing the portal?"
        text="Contact Adam before sending confidential financial information by email."
      />
    </PageShell>
  );
}

