import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { journeyEs, journeyScenariosEs, routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Proceso del Cliente Steel Beam",
  description:
    "Un proceso claro que guia a contratistas desde la primera conversacion hasta libros organizados, reportes confiables y una relacion financiera de largo plazo.",
  alternates: {
    canonical: routeMap.es.journey,
    languages: { en: routeMap.en.journey, es: routeMap.es.journey },
  },
};

export default function ProcesoDelClientePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.journey}>
      <PageHero
        eyebrow="Proceso del Cliente Steel Beam"
        title="Un proceso claro para construir sistemas financieros mas fuertes."
        text="Contratar un socio contable no deberia sentirse confuso. El proceso Steel Beam ofrece un camino estructurado desde la primera conversacion hasta una relacion de largo plazo."
      />

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Seis fases"
            title="Toda estructura fuerte comienza con un plan."
          />
          <div
            className="client-journey-structure"
            aria-label="Las seis fases del proceso Steel Beam"
          >
            <div className="steel-beam-top" aria-hidden="true">
              <span />
              <strong>Proceso del Cliente Steel Beam</strong>
              <span />
            </div>
            <div className="journey-support-grid">
              {journeyEs.map((item, index) => (
                <article className="journey-support" key={item.title}>
                  <div className="support-column" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="support-footing" aria-hidden="true" />
                  <div className="journey-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.subtitle}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="steel-beam-base" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Donde esta hoy?"
            title="Encontramos a los contratistas donde estan."
          />
          <div className="card-grid three">
            {journeyScenariosEs.map((item) => (
              <article className="info-card compact" key={item}>
                <h3>{item}</h3>
                <p>Ayudaremos a identificar el mejor siguiente paso para su negocio.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-copy">
          <h2>El exito debe sentirse practico.</h2>
          <p>
            Al final del proceso, nuestra meta es que cada cliente tenga registros
            organizados, reportes mensuales confiables, mejor visibilidad de
            rentabilidad, mas confianza en sus numeros y un socio financiero de
            confianza.
          </p>
        </div>
      </section>

      <CTASection
        title="La consistencia crea confianza."
        text="Un proceso claro protege documentos, mantiene reportes a tiempo y convierte registros en informacion util."
      />
    </PageShell>
  );
}
