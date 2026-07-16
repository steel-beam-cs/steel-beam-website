import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Gracias",
  description:
    "Gracias por contactar a Steel Beam Contractor Solutions LLC. Revisaremos su solicitud y responderemos pronto.",
  alternates: {
    canonical: "/es/gracias",
    languages: { en: "/thank-you", es: "/es/gracias" },
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <PageShell locale="es" currentPath="/es/gracias">
      <section className="page-hero">
        <div className="blueprint-grid" />
        <div className="container page-hero-inner">
          <p className="eyebrow">Solicitud Recibida</p>
          <h1>Gracias por comunicarse.</h1>
          <p>
            Su solicitud fue enviada a Steel Beam Contractor Solutions LLC.
            Revisaremos su informacion y daremos seguimiento dentro de un dia
            habil.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href="/es/centro-de-exito-para-contratistas">
              Visitar el Centro de Exito
            </Link>
            <Link className="button button-outline button-large" href="/es">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="panel">
            <h2>Que pasa despues?</h2>
            <ol className="number-list">
              <li>Revisamos su solicitud y los servicios seleccionados.</li>
              <li>Le contactamos para programar la consulta.</li>
              <li>Hablamos de libros actuales, metas y problemas.</li>
              <li>Si hay buen ajuste, recomendamos un siguiente paso practico.</li>
            </ol>
          </div>
          <aside className="contact-card">
            <h2>Necesita algo mas pronto?</h2>
            <p>
              Si es urgente, llame al {contact.phone} o envie email a{" "}
              <a className="text-link" href={`mailto:${contact.infoEmail}`}>
                {contact.infoEmail}
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
