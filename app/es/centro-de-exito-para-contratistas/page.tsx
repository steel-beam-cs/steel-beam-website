import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { downloads, featuredResourcesEs, routeMap, successCentersEs } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Centro de Exito para Contratistas",
  description:
    "Recursos practicos, listas, ideas y herramientas para ayudar a contratistas a mejorar contabilidad, flujo de efectivo, costos por proyecto y sistemas de negocio.",
  alternates: {
    canonical: routeMap.es.success,
    languages: { en: routeMap.en.success, es: routeMap.es.success },
  },
};

export default function CentroDeExitoPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.success}>
      <PageHero
        eyebrow="Centro de Exito para Contratistas"
        title="Conocimiento, herramientas y recursos para contratistas."
        text="El Centro de Exito esta disenado para ofrecer orientacion practica antes, durante y despues de una relacion con clientes."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Aprenda primero"
            title="Un centro de recursos construido alrededor de relaciones primero."
            text="El principio 80/20 de Steel Beam es simple: educar primero, invitar despues."
          />
          <div className="card-grid three">
            {successCentersEs.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Recursos destacados"
            title="Empiece con herramientas practicas para negocios contratistas."
            text="Estos recursos ayudan a contratistas a aprender, organizarse y dar el siguiente paso antes de una consulta."
          />
          <div className="card-grid three resource-directory">
            {featuredResourcesEs.map((resource) => (
              <Link className="info-card resource-link-card" href={resource.href} key={resource.title}>
                <strong>{resource.type}</strong>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <span>Abrir recurso</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Recurso destacado</p>
            <h2>Blueprint Brief</h2>
            <p>
              Un email practico para contratistas con un consejo de negocio, un
              recordatorio contable, un recurso util y un Steel Beam Insight.
            </p>
          </div>
          <form className="inline-form" action="https://formspree.io/f/mqevryyw" method="POST">
            <label htmlFor="brief-email-es">Recibir el Blueprint Brief</label>
            <input
              id="brief-email-es"
              name="email"
              type="email"
              placeholder="Correo electronico"
              required
            />
            <button className="button button-primary" type="submit">
              Unirse a la lista
            </button>
          </form>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Centro de Descargas"
            title="Documentos del cliente en espanol."
            text="Use estos recursos para prepararse para incorporacion, organizacion mensual de documentos y preguntas comunes."
          />
          <div className="card-grid three resource-directory">
            {downloads.es.map(([title, href]) => (
              <Link className="info-card resource-link-card" href={href} key={href}>
                <strong>Descargar</strong>
                <h3>{title}</h3>
                <p>Recurso para incorporacion, organizacion o apoyo al cliente.</p>
                <span>Abrir recurso</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Use los recursos, luego hablemos del siguiente paso."
        text="Los documentos ayudan a organizarse antes de la consulta."
      />
    </PageShell>
  );
}
