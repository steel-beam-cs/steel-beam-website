import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { MarkupMarginCalculator } from "@/components/MarkupMarginCalculator";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Calculadora de Markup vs Margen",
  description:
    "Calculadora para contratistas que estima precio de venta, ganancia bruta y margen a partir del costo y markup.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen",
    languages: {
      en: "/contractor-success-center/markup-vs-margin-calculator",
      es: "/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen",
    },
  },
};

export default function CalculadoraMarkupMargenPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen">
      <PageHero
        eyebrow="Calculadora para Contratistas"
        title="Markup y margen no son lo mismo."
        text="Use esta calculadora para ver como el costo del proyecto y markup se convierten en precio de venta, ganancia bruta y margen."
        secondaryLabel="Volver al Centro"
        secondaryHref="/es/centro-de-exito-para-contratistas"
      />
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Cotice con numeros mas claros</p>
            <h2>Estime la diferencia antes de poner precio al trabajo.</h2>
            <p>
              Markup es el porcentaje agregado sobre el costo. Margen es el
              porcentaje del precio final que queda como ganancia bruta.
            </p>
          </div>
          <MarkupMarginCalculator locale="es" />
        </div>
      </section>
      <CTASection title="Quiere mas claridad sobre rentabilidad por proyecto?" text="Steel Beam ayuda a organizar costos, reportes y revisiones mensuales para tomar mejores decisiones de precio." />
    </PageShell>
  );
}
