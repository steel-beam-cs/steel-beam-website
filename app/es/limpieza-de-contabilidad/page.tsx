import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Limpieza de Contabilidad para Contratistas",
  description:
    "Apoyo para contratistas con libros atrasados, registros desorganizados, conciliaciones pendientes y reportes que necesitan reconstruirse.",
  alternates: {
    canonical: routeMap.es.cleanup,
    languages: { en: routeMap.en.cleanup, es: routeMap.es.cleanup },
  },
};

const steps = [
  "Revisar el estado actual de cuentas y software.",
  "Reunir estados de cuenta, recibos, nomina y documentos de proyectos.",
  "Conciliar cuentas y organizar transacciones pendientes.",
  "Separar problemas que necesitan decision del propietario o CPA.",
  "Crear una base limpia para apoyo mensual.",
];

export default function LimpiezaPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.cleanup}>
      <PageHero
        eyebrow="Limpieza de Contabilidad"
        title="Si sus libros estan atrasados, empiece con un plan claro."
        text="Steel Beam ayuda a contratistas a organizar registros, reconstruir informacion y volver a reportes mas confiables."
        primaryLabel="Hablar de Limpieza"
        primaryHref={routeMap.es.contact}
      />
      <section className="section">
        <div className="container">
          <ol className="number-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection title="No necesita resolverlo todo antes de llamar." text="Una conversacion inicial puede aclarar que documentos se necesitan y cual es el siguiente paso." />
    </PageShell>
  );
}
