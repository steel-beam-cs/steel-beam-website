import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Que Enviar a su Contador Cada Mes",
  description:
    "Lista mensual de documentos para contratistas: estados, recibos, facturas, nomina y registros de proyectos.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador",
    languages: {
      en: "/contractor-success-center/what-to-send-your-bookkeeper",
      es: "/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador",
    },
  },
};

const documents = [
  "Estados bancarios de todas las cuentas del negocio.",
  "Estados de tarjetas de credito del negocio.",
  "Estados de prestamos, financiamiento de equipo y lineas de credito.",
  "Recibos de materiales, herramientas, combustible, comidas, viajes y obra.",
  "Facturas a clientes, depositos, retenciones, avances y pagos.",
  "Cuentas de proveedores, facturas de subcontratistas y soporte de pagos.",
  "Reportes de nomina, pagos a contratistas y registros de tiempo cuando aplique.",
  "Nombres de proyectos, numeros, ordenes de cambio y notas de costos.",
  "Reportes de impuesto sobre ventas cuando aplique.",
  "Preguntas sobre transacciones dudosas antes del cierre mensual.",
];

export default function QueEnviarPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador">
      <PageHero
        eyebrow="Centro de Exito"
        title="Que enviar a su contador cada mes."
        text="Registros mensuales mas limpios empiezan con un flujo de documentos consistente."
      />
      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Su contabilidad solo es tan fuerte como los documentos detras de
            ella. Una rutina mensual reduce preguntas de ultimo minuto.
          </p>
          <div className="checklist-panel">
            {documents.map((item) => (
              <label className="checklist-item" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <h2>Mejor practica</h2>
          <p>
            Suba documentos cada mes en lugar de esperar hasta la temporada de
            impuestos. Para contratistas, esperar demasiado hace mas dificil
            recordar que recibo, proveedor o cargo pertenece a que proyecto.
          </p>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              Un buen habito de documentos es una de las formas mas faciles de
              mejorar costos por proyecto, revisiones de flujo de efectivo y
              coordinacion con CPA al cierre del ano.
            </p>
          </div>

          <p>
            <Link className="text-link" href="/es/portal-del-cliente">
              Ver intercambio seguro de documentos
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </PageShell>
  );
}
