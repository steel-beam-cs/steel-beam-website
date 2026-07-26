import Link from "next/link";
import {
  alternateRoutes,
  contact,
  Locale,
  navItems,
  navItemsEs,
  routeMap,
  spanishSupportNote,
} from "./site-data";

export function SiteFooter({
  locale = "en",
  currentPath = "/",
}: {
  locale?: Locale;
  currentPath?: string;
}) {
  const isSpanish = locale === "es";
  const items = isSpanish ? navItemsEs : navItems;
  const alternateHref =
    alternateRoutes.get(currentPath) ?? (isSpanish ? routeMap.en.home : routeMap.es.home);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h2>Steel Beam Contractor Solutions LLC</h2>
          <p className="footer-statement">
            {isSpanish
              ? "Ayudando a Contratistas a Construir Negocios Mas Fuertes."
              : "Helping Contractors Build Stronger Businesses."}
          </p>
          <p className="footer-slogan">
            Solid Solutions, Reinforcing Your Business.
          </p>
          <p className="footer-statement">
            {isSpanish
              ? spanishSupportNote
              : "Spanish-language documents and language assistance are available whenever possible. Steel Beam does not advertise as a fully bilingual office."}
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <h3>{isSpanish ? "Explorar" : "Explore"}</h3>
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={alternateHref} hrefLang={isSpanish ? "en" : "es"}>
              {isSpanish ? "English" : "Espanol"}
            </Link>
          </div>

          <div>
            <h3>{isSpanish ? "Contacto" : "Contact"}</h3>
            <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
              {contact.phone}
            </a>
            <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a>
            <a href={`mailto:${contact.supportEmail}`}>
              {contact.supportEmail}
            </a>
          </div>

          <div>
            <h3>{isSpanish ? "Acceso del Cliente" : "Client Access"}</h3>
            <Link href={isSpanish ? routeMap.es.portal : routeMap.en.portal}>
              {isSpanish ? "Portal Seguro del Cliente" : "Secure Client Portal"}
            </Link>
            <Link href={isSpanish ? routeMap.es.contact : routeMap.en.contact}>
              {isSpanish ? "Programar Consulta" : "Schedule Consultation"}
            </Link>
            <a href={`mailto:${contact.billingEmail}`}>
              {isSpanish ? "Preguntas de Facturacion" : "Billing Questions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
