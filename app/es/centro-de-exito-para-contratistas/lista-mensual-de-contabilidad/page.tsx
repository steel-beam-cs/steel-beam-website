import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Lista Mensual de Contabilidad",
  description:
    "Lista mensual de contabilidad para contratistas que quieren registros mas limpios y mejores reportes.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad",
    languages: {
      en: "/contractor-success-center/monthly-bookkeeping-checklist",
      es: "/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad",
    },
  },
};

const checklist = [
  "Descargar estados bancarios y de tarjetas.",
  "Subir recibos, facturas, reportes de nomina y avisos fiscales.",
  "Confirmar que todas las facturas a clientes fueron enviadas.",
  "Revisar facturas pendientes y saldos vencidos.",
  "Revisar cuentas de proveedores y proximas fechas de pago.",
  "Separar transacciones personales y del negocio.",
  "Confirmar nombres de proyectos, clientes y categorias.",
  "Revisar materiales, mano de obra, subcontratistas, equipo y combustible por proyecto.",
  "Conciliar cuentas bancarias y tarjetas.",
  "Revisar Estado de Resultados, Balance General y cuentas por cobrar.",
  "Marcar gastos inusuales, documentos faltantes o preguntas de costos por proyecto.",
  "Guardar un paquete mensual de reportes.",
];

export default function ListaMensualPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad">
      <PageHero
        eyebrow="Lista para Contratistas"
        title="Lista mensual de contabilidad para contratistas."
        text="Un ritmo simple de fin de mes ayuda a mantener registros actuales y reportes mas utiles."
        secondaryLabel="Volver al Centro"
        secondaryHref="/es/centro-de-exito-para-contratistas"
      />
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Ritmo mensual</p>
            <h2>Use esta lista antes del cierre mensual.</h2>
            <p>
              Los libros de contratistas se desordenan cuando documentos, costos,
              facturas y pagos se revisan solo en temporada de impuestos.
            </p>
            <Link className="button button-primary" href="/es/contacto">
              Recibir ayuda con sus libros
            </Link>
          </div>
          <div className="checklist-panel">
            {checklist.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
