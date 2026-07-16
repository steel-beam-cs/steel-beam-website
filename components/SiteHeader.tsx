"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import {
  alternateRoutes,
  Locale,
  navItems,
  navItemsEs,
  routeMap,
} from "./site-data";

export function SiteHeader({
  locale = "en",
  currentPath = "/",
}: {
  locale?: Locale;
  currentPath?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const isSpanish = locale === "es";
  const items = isSpanish ? navItemsEs : navItems;
  const alternateHref =
    alternateRoutes.get(currentPath) ?? (isSpanish ? routeMap.en.home : routeMap.es.home);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={isSpanish ? routeMap.es.home : routeMap.en.home} aria-label="Steel Beam home">
          <Image
            src="/images/steel-beam-banner.png"
            alt="Steel Beam Contractor Solutions LLC"
            width={420}
            height={95}
            priority
          />
        </Link>

        <nav className="main-nav" aria-label={isSpanish ? "Navegacion principal" : "Primary navigation"}>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="language-link" href={alternateHref} hrefLang={isSpanish ? "en" : "es"}>
            {isSpanish ? "English" : "Espanol"}
          </Link>
          <Link className="button button-portal" href={isSpanish ? routeMap.es.portal : routeMap.en.portal}>
            {isSpanish ? "Portal del Cliente" : "Client Portal"}
          </Link>
          <Link className="button button-primary" href={isSpanish ? routeMap.es.contact : routeMap.en.contact}>
            {isSpanish ? "Consulta Gratis" : "Free Consultation"}
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? (isSpanish ? "Cerrar menu" : "Close menu") : isSpanish ? "Abrir menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (isSpanish ? "Cerrar" : "Close") : "Menu"}
        </button>
      </div>

      <nav
        id={menuId}
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label={isSpanish ? "Navegacion movil" : "Mobile navigation"}
        aria-hidden={!menuOpen}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href={alternateHref} hrefLang={isSpanish ? "en" : "es"} onClick={closeMenu}>
          {isSpanish ? "English" : "Espanol"}
        </Link>
        <div className="mobile-nav-actions">
          <Link
            className="button button-portal"
            href={isSpanish ? routeMap.es.portal : routeMap.en.portal}
            onClick={closeMenu}
          >
            {isSpanish ? "Portal del Cliente" : "Client Portal"}
          </Link>
          <Link
            className="button button-primary"
            href={isSpanish ? routeMap.es.contact : routeMap.en.contact}
            onClick={closeMenu}
          >
            {isSpanish ? "Consulta Gratis" : "Free Consultation"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
