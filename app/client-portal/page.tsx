import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/components/site-data";

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
        eyebrow="Secure Client Portal"
        title="A secure way to share your financial information."
        text="Steel Beam uses ShareFile for the secure upload and exchange of confidential business documents."
        primaryLabel="Access Secure Client Portal"
        primaryHref={contact.shareFileUrl}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="status-pill">Portal Status: Operational</p>
            <h2>Why we use ShareFile</h2>
            <p>
              Your financial records deserve more than convenience. ShareFile
              provides a professional document exchange process that helps
              reduce the risk of sensitive information being exposed through
              standard email.
            </p>
            <a
              className="button button-primary"
              href={contact.shareFileUrl}
              target="_blank"
              rel="noreferrer"
            >
              Access the portal
            </a>
          </div>
          <div className="panel">
            <h3>First-time user guide</h3>
            <ol className="number-list">
              <li>Click Access Secure Client Portal.</li>
              <li>Sign in or create your account.</li>
              <li>Select your folder.</li>
              <li>Upload or drag and drop your files.</li>
              <li>Contact support if you need help.</li>
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
            Need help? Call {contact.phone} or email{" "}
            <a className="text-link" href={`mailto:${contact.supportEmail}`}>
              {contact.supportEmail}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Need help accessing the portal?"
        text="Contact support before sending confidential financial information by email."
      />
    </PageShell>
  );
}

