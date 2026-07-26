import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Conceptos Basicos de Costos por Proyecto",
  description:
    "Guia practica de costos por proyecto para contratistas: mano de obra, materiales, subcontratistas, equipo, gastos y rentabilidad.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
    languages: {
      en: "/contractor-success-center/job-costing-basics",
      es: "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
    },
  },
};

const costBuckets = [
  "Mano de obra directamente relacionada al proyecto",
  "Materiales y suministros",
  "Costos de subcontratistas",
  "Equipo, rentas, combustible y gastos de obra",
  "Permisos, cuotas, disposicion y costos especificos del proyecto",
  "Gastos generales asignados cuando sea apropiado",
];

export default function CostosPorProyectoPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto">
      <PageHero
        eyebrow="Centro de Exito"
        title="Conceptos basicos de costos por proyecto."
        text="Los costos por proyecto ayudan a responder una pregunta critica: este proyecto realmente genero ganancia?"
      />
      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Los ingresos muestran cuanto trabajo entro. Los costos por proyecto
            ayudan a entender si el trabajo fue rentable despues de contar los
            costos reales.
          </p>
          <h2>Que se debe seguir</h2>
          <p>
            Un proceso util agrupa actividad por proyecto para comparar costos
            estimados, costos reales, facturacion y ganancia bruta.
          </p>
          <ul className="resource-list">
            {costBuckets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              La meta no es crear reportes complicados. La meta es identificar
              que proyectos apoyan al negocio y cuales consumen efectivo,
              tiempo y margen.
            </p>
          </div>

          <h2>Por que importa</h2>
          <p>
            Sin costos por proyecto, un contratista puede conocer ventas totales y
            gastos totales, pero aun no saber que proyectos funcionaron bien. Eso
            puede llevar a cotizar bajo, perder ordenes de cambio, presion de
            nomina y proyectos que parecen ocupados pero no generan suficiente
            ganancia.
          </p>

          <h2>Por donde empezar</h2>
          <p>
            Empiece simple: asigne ingresos y costos directos a cada proyecto de
            forma consistente. Luego revise rentabilidad por proyecto cada mes en
            lugar de esperar al cierre del ano.
          </p>

          <p>
            <Link className="text-link" href="/es/contacto">
              Preguntar sobre apoyo de costos por proyecto
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </PageShell>
  );
}
