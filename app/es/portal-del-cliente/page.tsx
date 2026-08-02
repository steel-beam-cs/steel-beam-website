import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import {
  clientPortalNoticeEs,
  contact,
  portalUploadsEs,
  routeMap,
} from "@/components/site-data";

export const metadata: Metadata = {
  title: "Portal del Cliente de Steel Beam",
  description: clientPortalNoticeEs,
  alternates: {
    canonical: routeMap.es.portal,
    languages: { en: routeMap.en.portal, es: routeMap.es.portal },
  },
};

export default function PortalDelClientePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.portal}>
      <PageHero
        eyebrow="Acceso y Ayuda para Clientes Existentes"
        title="Portal del Cliente de Steel Beam"
        text={clientPortalNoticeEs}
        primaryLabel="Enviar Email a Adam"
        primaryHref={`mailto:${contact.founderEmail}`}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="status-pill">Solo Invitaciones Privadas</p>
            <h2>Como funciona el acceso al portal</h2>
            <p>
              Steel Beam crea un portal separado para cada cliente activo y
              envia acceso solo al email autorizado. No existe un enlace publico
              a una carpeta de Google Drive.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${contact.founderEmail}`}
            >
              Enviar email a Adam para ayuda
            </a>
          </div>
          <div className="panel">
            <h3>Guia de invitacion y acceso</h3>
            <ol className="number-list">
              <li>Busque un email de invitacion de Google Drive enviado por Steel Beam.</li>
              <li>Abra la invitacion con la direccion de email que la recibio.</li>
              <li>Siga las instrucciones de inicio de sesion o verificacion de Google.</li>
              <li>Use las carpetas compartidas para cargas, reportes y recursos.</li>
              <li>Contacte soporte si falta la invitacion o falla el acceso.</li>
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
            Para ayuda con el acceso, contacte a:
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
        title="Necesita ayuda para acceder al portal?"
        text="Contacte a Adam antes de enviar informacion financiera confidencial por email."
      />
    </PageShell>
  );
}
