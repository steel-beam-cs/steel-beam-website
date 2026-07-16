import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { journeyEs, routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Proceso del Cliente",
  description:
    "Conozca el proceso Steel Beam desde descubrimiento e incorporacion hasta reportes mensuales y apoyo continuo.",
  alternates: {
    canonical: routeMap.es.journey,
    languages: { en: routeMap.en.journey, es: routeMap.es.journey },
  },
};

export default function ProcesoDelClientePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.journey}>
      <PageHero
        eyebrow="Proceso del Cliente"
        title="Un proceso organizado para mejores libros y mejores decisiones."
        text="Desde la primera conversacion hasta una relacion continua, Steel Beam usa pasos claros para que sepa que sigue."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />
      <section className="section section-navy">
        <div className="container">
          <div className="client-journey-structure">
            <div className="steel-beam-top" aria-hidden="true">
              <span />
              <strong>Steel Beam Client Journey</strong>
              <span />
            </div>
            <div className="journey-support-grid">
              {journeyEs.map((step, index) => (
                <article className="journey-support" key={step.title}>
                  <div className="support-column" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="support-footing" aria-hidden="true" />
                  <div className="journey-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="steel-beam-base" aria-hidden="true" />
          </div>
        </div>
      </section>
      <CTASection title="La consistencia crea confianza." text="Un proceso claro protege documentos, mantiene reportes a tiempo y convierte registros en informacion util." />
    </PageShell>
  );
}
