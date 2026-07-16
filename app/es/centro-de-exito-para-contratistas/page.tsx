import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { downloads, routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Centro de Exito para Contratistas",
  description:
    "Recursos, documentos, listas y guias para contratistas que quieren mejorar contabilidad, efectivo, nomina y costos por proyecto.",
  alternates: {
    canonical: routeMap.es.success,
    languages: { en: routeMap.en.success, es: routeMap.es.success },
  },
};

const resources = [
  ["Guia", "Costos por proyecto", "Entienda mano de obra, materiales, subcontratistas y margen."],
  ["Lista", "Cierre mensual", "Organice documentos antes de cada cierre mensual."],
  ["Planeacion", "Flujo de efectivo", "Preparese para nomina, materiales, retenciones y pagos lentos."],
];

export default function CentroDeExitoPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.success}>
      <PageHero
        eyebrow="Centro de Exito para Contratistas"
        title="Recursos practicos para manejar un negocio contratista mas fuerte."
        text="Guias, listas y documentos de inicio para contratistas que quieren mas claridad financiera."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid three">
            {resources.map(([type, title, text]) => (
              <article className="info-card resource-link-card" key={title}>
                <strong>{type}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow dark">Centro de Descargas</p>
          <h2>Documentos del cliente en espanol.</h2>
          <div className="card-grid three">
            {downloads.es.map(([title, href]) => (
              <Link className="info-card resource-link-card" href={href} key={href}>
                <h3>{title}</h3>
                <p>Documento descargable para incorporacion, organizacion o preguntas comunes.</p>
                <span>Descargar</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Use los recursos, luego hablemos del siguiente paso." text="Los documentos ayudan a organizarse antes de la consulta." />
    </PageShell>
  );
}
