import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, portalUploadsEs, routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Portal Seguro del Cliente",
  description:
    "Acceda al portal seguro ShareFile de Steel Beam para intercambio confidencial de documentos, registros financieros, reportes de nomina, facturas y apoyo al cliente.",
  alternates: {
    canonical: routeMap.es.portal,
    languages: { en: routeMap.en.portal, es: routeMap.es.portal },
  },
};

export default function PortalDelClientePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.portal}>
      <PageHero
        eyebrow="Portal Seguro del Cliente"
        title="Una forma segura de compartir su informacion financiera."
        text="Steel Beam usa ShareFile para la carga e intercambio seguro de documentos confidenciales del negocio."
        primaryLabel="Abrir Portal Seguro"
        primaryHref={contact.shareFileUrl}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="status-pill">Estado del Portal: Operativo</p>
            <h2>Por que usamos ShareFile</h2>
            <p>
              Sus registros financieros merecen mas que conveniencia. ShareFile
              ofrece un proceso profesional de intercambio de documentos que
              ayuda a reducir el riesgo de exponer informacion sensible por
              email normal.
            </p>
            <a
              className="button button-primary"
              href={contact.shareFileUrl}
              target="_blank"
              rel="noreferrer"
            >
              Acceder al portal
            </a>
          </div>
          <div className="panel">
            <h3>Guia para primer uso</h3>
            <ol className="number-list">
              <li>Haga clic en el boton Abrir Portal Seguro.</li>
              <li>Inicie sesion o cree su cuenta.</li>
              <li>Seleccione su carpeta.</li>
              <li>Suba o arrastre sus archivos.</li>
              <li>Contacte soporte si necesita ayuda.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Que puedo subir?"
            title="Use el portal para registros sensibles del negocio."
          />
          <div className="tag-grid">
            {portalUploadsEs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>La Promesa de Seguridad Steel Beam</h2>
          <p>
            Protegemos su confidencialidad, usamos tecnologia segura, verificamos
            solicitudes inusuales, comunicamos con prontitud si surgen
            preocupaciones y mejoramos continuamente nuestras practicas de
            seguridad.
          </p>
          <p>
            Necesita ayuda? Llame al {contact.phone} o envie email a{" "}
            <a className="text-link" href={`mailto:${contact.supportEmail}`}>
              {contact.supportEmail}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Necesita ayuda para acceder al portal?"
        text="Contacte soporte antes de enviar informacion financiera confidencial por email."
      />
    </PageShell>
  );
}
