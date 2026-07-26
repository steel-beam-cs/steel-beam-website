import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Lista para Libros Limpios",
  description:
    "Lista para saber si los libros de un contratista estan listos para contabilidad mensual, limpieza, CPA o reportes.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/lista-para-libros-limpios",
    languages: {
      en: "/contractor-success-center/clean-books-readiness-checklist",
      es: "/es/centro-de-exito-para-contratistas/lista-para-libros-limpios",
    },
  },
};

const readinessItems = [
  "Todas las cuentas bancarias y tarjetas del negocio estan identificadas.",
  "Hay estados disponibles para cada mes revisado.",
  "Actividad personal y del negocio esta razonablemente separada.",
  "Prestamos, equipo y lineas de credito estan documentados.",
  "Facturas y depositos de clientes pueden conectarse con actividad bancaria.",
  "Facturas de proveedores, subcontratistas y recibos estan disponibles.",
  "Reportes de nomina estan disponibles para el periodo.",
  "Preguntas y transacciones sin clasificar pueden revisarse.",
  "El archivo contable tiene un plan de cuentas adecuado para contratistas.",
  "Los reportes pueden revisarse con CPA o profesional financiero cuando sea necesario.",
];

export default function LibrosLimpiosPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/lista-para-libros-limpios">
      <PageHero
        eyebrow="Centro de Exito"
        title="Lista de preparacion para libros limpios."
        text="Use esta lista para ver si sus registros estan listos para contabilidad mensual, limpieza o revision de CPA."
      />
      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Libros limpios vienen de registros consistentes, cuentas claras,
            estados completos y un proceso para resolver preguntas.
          </p>
          <div className="checklist-panel">
            {readinessItems.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <p>
            <Link className="text-link" href="/es/limpieza-de-contabilidad">
              Aprender sobre limpieza de contabilidad
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </PageShell>
  );
}
