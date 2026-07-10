import Image from "next/image";
import Link from "next/link";
import { navItems } from "./site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Steel Beam home">
          <Image
            src="/images/steel-beam-banner.png"
            alt="Steel Beam Contractor Solutions LLC"
            width={420}
            height={95}
            priority
          />
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button-portal" href="/client-portal">
            Client Portal
          </Link>
          <Link className="button button-primary" href="/contact">
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
