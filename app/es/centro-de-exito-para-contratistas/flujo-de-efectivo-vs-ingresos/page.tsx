import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Por Que el Flujo de Efectivo Importa Mas que los Ingresos",
  description:
    "Aprenda por que los contratistas pueden tener buenos ingresos y aun asi sentir presion de efectivo.",
  alternates: {
    canonical: "/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos",
    languages: {
      en: "/contractor-success-center/cash-flow-vs-revenue",
      es: "/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos",
    },
  },
};

export default function FlujoDeEfectivoPage() {
  return (
    <PageShell locale="es" currentPath="/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos">
      <PageHero
        eyebrow="Centro de Exito"
        title="Por que el flujo de efectivo importa mas que los ingresos."
        text="Los ingresos muestran cuanto trabajo entro. El flujo de efectivo muestra si el negocio puede seguir operando mientras el trabajo se realiza."
        secondaryLabel="Volver al Centro"
        secondaryHref="/es/centro-de-exito-para-contratistas"
      />
      <section className="section">
        <article className="container article-layout">
          <p className="lead">
            Un contratista puede estar ocupado, con agenda llena, y aun asi
            estar corto de efectivo. Muchas veces el problema es el tiempo en
            que el dinero entra y sale del negocio.
          </p>
          <h2>Ingresos no son lo mismo que efectivo disponible</h2>
          <p>
            Un proyecto grande puede facturarse este mes, mientras mano de obra
            y materiales se pagan esta semana y el cliente paga en 30, 45 o 60
            dias. En papel el trabajo puede verse fuerte; en la cuenta bancaria
            puede sentirse diferente.
          </p>
          <h2>Puntos comunes de presion</h2>
          <ul className="resource-list">
            <li>Materiales pagados antes de recibir pagos del cliente.</li>
            <li>Nomina semanal o quincenal sin importar cuando cobre el cliente.</li>
            <li>Ordenes de cambio hechas antes de documentarse o aprobarse.</li>
            <li>Retenciones, pagos lentos o desembolsos atrasados.</li>
            <li>Equipo, combustible, seguros e impuestos llegando al mismo tiempo.</li>
          </ul>

          <h2>Como se ve una mejor visibilidad de flujo de efectivo</h2>
          <p>
            Mejor flujo de efectivo empieza con libros actuales, costos por
            proyecto limpios, cuentas por cobrar claras y un ritmo simple para
            revisar lo que vence, lo que se debe y lo que viene despues.
          </p>

          <div className="callout-box">
            <strong>Steel Beam Insight</strong>
            <p>
              Un contratista en crecimiento no solo necesita mas ingresos.
              Necesita visibilidad para saber que proyectos crean efectivo,
              cuales lo consumen y cuando viene la siguiente presion.
            </p>
          </div>

          <h2>Tres preguntas para este mes</h2>
          <ol className="number-list">
            <li>Que facturas estan vencidas?</li>
            <li>Que proyectos tienen costos que suben mas rapido de lo esperado?</li>
            <li>Que pagos, nomina, impuestos o renovaciones vencen pronto?</li>
          </ol>

          <p>
            Si esas respuestas son dificiles de encontrar, el siguiente paso no es
            panico. El siguiente paso es construir un mejor proceso financiero.
          </p>

          <p>
            <Link className="button button-primary button-large" href="/es/contacto">
              Hablar sobre flujo de efectivo
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </PageShell>
  );
}
