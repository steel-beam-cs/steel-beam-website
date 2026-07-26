import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Lista de Preparacion de Nomina",
  description:
    "Lista para contratistas que preparan nomina, seguimiento de subcontratistas, tarjetas de tiempo y apoyo de nomina.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/lista-de-nomina",
    languages: {
      en: "/contractor-success-center/payroll-readiness-checklist",
      es: "/es/centro-de-exito-para-contratistas/lista-de-nomina",
    },
  },
};

const payrollItems = [
  "Confirmar si cada trabajador es empleado o subcontratista con su profesional fiscal cuando sea necesario.",
  "Reunir W-4, I-9, W-9 y detalles de deposito directo antes de iniciar.",
  "Elegir un calendario de nomina consistente.",
  "Crear un proceso de tarjetas de tiempo para cuadrillas, proyectos y labor.",
  "Seguir reembolsos, bonos, anticipos, deducciones y embargos por separado.",
  "Mantener reportes de nomina organizados para contabilidad y CPA.",
  "Confirmar requisitos de compensacion laboral y seguros.",
  "Decidir si aplica nomina certificada o salario prevaleciente.",
];

export default function ListaNominaPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/lista-de-nomina">
      <PageHero
        eyebrow="Centro de Exito"
        title="Lista de preparacion de nomina para contratistas."
        text="La nomina es mas facil cuando registros, datos de trabajadores y tiempo estan organizados antes del primer proceso."
      />
      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            La nomina se ofrece como servicio independiente porque cada
            contratista puede necesitar un nivel distinto de apoyo.
          </p>
          <div className="checklist-panel">
            {payrollItems.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              Si la mano de obra de nomina no se conecta a los proyectos
              correctos, la rentabilidad puede verse mejor o peor de lo real.
            </p>
          </div>
          <p>
            <Link className="text-link" href="/es/contacto">
              Preguntar sobre apoyo de nomina
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </PageShell>
  );
}
