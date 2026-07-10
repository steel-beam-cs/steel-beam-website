"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { navItems } from "./site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setMenuOpen(false);

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

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id={menuId}
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <div className="mobile-nav-actions">
          <Link
            className="button button-portal"
            href="/client-portal"
            onClick={closeMenu}
          >
            Client Portal
          </Link>
          <Link
            className="button button-primary"
            href="/contact"
            onClick={closeMenu}
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
