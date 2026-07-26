import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { routeMap, spanishSupportNote } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas sobre contabilidad, nomina, costos por proyecto, limpieza de libros y apoyo en espanol.",
  alternates: {
    canonical: routeMap.es.answers,
    languages: { en: routeMap.en.answers, es: routeMap.es.answers },
  },
};

const faqs = [
  ["Trabajan solo con contratistas?", "Steel Beam esta enfocado en contratistas y en las necesidades financieras de negocios de construccion."],
  ["La nomina esta incluida?", "La nomina puede ser un servicio independiente y se agrega cuando tiene sentido para el cliente."],
  ["Ayudan con libros atrasados?", "Si. El apoyo de limpieza ayuda a organizar registros pasados, conciliar cuentas y preparar una base mas clara."],
  ["Apoyan a contratistas que hablan espanol?", spanishSupportNote],
  ["Los precios son fijos?", "Los precios publicados son puntos iniciales. Trabajo complejo puede requerir cotizacion personalizada."],
];

export default function PreguntasFrecuentesPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.answers}>
      <PageHero
        eyebrow="Preguntas Frecuentes"
        title="Respuestas claras antes de empezar."
        text="Una guia rapida sobre servicios, proceso, documentos y apoyo en espanol."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />
      <section className="section">
        <div className="container faq-layout">
          {faqs.map(([question, answer]) => (
            <details className="info-card faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTASection title="Todavia tiene preguntas?" text="Traiga sus preguntas a una consulta y hablaremos del siguiente paso practico." />
    </PageShell>
  );
}
