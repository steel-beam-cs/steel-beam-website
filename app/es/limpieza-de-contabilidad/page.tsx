import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import {
  cleanupIncludesEs,
  cleanupProcessEs,
  routeMap,
  whenItFitsEs,
} from "@/components/site-data";

export const metadata: Metadata = {
  title: "Limpieza de Contabilidad para Contratistas",
  description:
    "Libros atrasados? Steel Beam ayuda a contratistas a reconstruir registros, conciliar cuentas, organizar documentos y preparar libros mas limpios sin juicio.",
  alternates: {
    canonical: routeMap.es.cleanup,
    languages: { en: routeMap.en.cleanup, es: routeMap.es.cleanup },
  },
};

export default function LimpiezaPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.cleanup}>
      <PageHero
        eyebrow="Limpieza de Contabilidad"
        title="Libros atrasados? Podemos ayudar a reconstruir los registros."
        text="La limpieza contable ofrece a los contratistas un camino practico desde la incertidumbre financiera hacia registros organizados, reportes mas claros y un proceso mensual mas fuerte."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Sin juicio. Solo estructura.</p>
            <h2>La limpieza no se trata de culpa. Se trata de reconstruir confianza.</h2>
            <p>
              Muchos contratistas se quedan atras porque estan ocupados
              construyendo, manejando equipos, cobrando pagos y manteniendo
              proyectos en movimiento. Steel Beam ayuda a organizar lo que paso,
              identificar lo que falta y reconstruir los libros de una forma que
              apoye mejores decisiones.
            </p>
            <p>
              La limpieza normalmente se cotiza por mes porque cada negocio tiene
              diferente volumen de transacciones, registros, historial de
              software y complejidad.
            </p>
          </div>
          <aside className="panel price-panel">
            <span className="status-pill">Punto de partida</span>
            <h3>$250 por mes que necesita limpieza</h3>
            <p>
              Proyectos anuales de limpieza pueden cotizarse en $2,500 cuando el
              alcance es directo. Archivos complejos, registros faltantes,
              multiples entidades, problemas de nomina, impuestos sobre ventas o
              limpieza intensa de costos por proyecto pueden requerir cotizacion
              personalizada.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Que incluye"
            title="Un alcance practico de limpieza para libros de contratistas."
            text="La meta es convertir registros dispersos en un archivo contable mas limpio y util."
          />
          <div className="card-grid three">
            {cleanupIncludesEs.map((item) => (
              <article className="info-card compact" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Cuando la limpieza encaja"
            title="Este servicio esta disenado para contratistas que necesitan un reinicio."
          />
          <div className="card-grid three">
            {whenItFitsEs.map((item) => (
              <article className="info-card compact" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Proceso de limpieza"
            title="Un camino claro desde registros desordenados hasta reportes utiles."
            text="La limpieza funciona mejor cuando las expectativas son claras desde el principio."
          />
          <div className="journey-beam detailed">
            {cleanupProcessEs.map((item, index) => (
              <article className="journey-step" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow dark">Expectativas importantes</p>
          <h2>La limpieza es un servicio contable, no asesoria fiscal ni legal.</h2>
          <p>
            Steel Beam puede ayudar a organizar registros, conciliar cuentas,
            identificar preguntas y preparar reportes mas limpios. Posiciones
            fiscales, declaraciones enmendadas, temas de entidad y preguntas
            legales deben revisarse con su CPA o abogado.
          </p>
          <p>
            El mejor siguiente paso es una consulta y revision de libros para
            entender el estado actual de sus registros antes de cotizar la
            limpieza.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href={routeMap.es.contact}>
              Solicitar Revision de Limpieza
            </Link>
            <Link
              className="button button-secondary button-large"
              href="/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador"
            >
              Ver Que Registros Ayudan
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Pongamos sus libros de nuevo en orden."
        text="Si sus registros estan atrasados, Steel Beam puede ayudarle a entender el alcance, reconstruir la base y avanzar hacia un proceso mensual mas limpio."
      />
    </PageShell>
  );
}
