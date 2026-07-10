import Link from "next/link";
import { contact, navItems } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h2>Steel Beam Contractor Solutions LLC</h2>
          <p className="footer-statement">
            Helping Contractors Build Stronger Businesses.
          </p>
          <p className="footer-slogan">
            Solid Solutions, Reinforcing Your Business.
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Explore</h3>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h3>Contact</h3>
            <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
              {contact.phone}
            </a>
            <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a>
            <a href={`mailto:${contact.supportEmail}`}>
              {contact.supportEmail}
            </a>
          </div>

          <div>
            <h3>Client Access</h3>
            <Link href="/client-portal">Secure Client Portal</Link>
            <Link href="/contact">Schedule Consultation</Link>
            <a href={`mailto:${contact.billingEmail}`}>Billing Questions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
