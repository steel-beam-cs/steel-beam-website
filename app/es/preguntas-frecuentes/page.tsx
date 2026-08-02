import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import {
  clientPortalNoticeEs,
  contact,
  routeMap,
  spanishSupportNote,
} from "@/components/site-data";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas sobre contabilidad, nomina, costos por proyecto, limpieza de libros, precios, documentos seguros y apoyo en espanol.",
  alternates: {
    canonical: routeMap.es.answers,
    languages: { en: routeMap.en.answers, es: routeMap.es.answers },
  },
};

const faqs = [
  [
    "Como me convierto en cliente?",
    "Empieza con una consulta gratis. Aprendemos sobre su negocio, respondemos preguntas y recomendamos el mejor siguiente paso.",
  ],
  [
    "Trabajan solo con contratistas?",
    "Steel Beam fue creado especificamente para contratistas y negocios relacionados con construccion.",
  ],
  [
    "Como envio documentos?",
    clientPortalNoticeEs,
  ],
  [
    "Ofrecen nomina?",
    "Si. La nomina esta disponible como servicio independiente y puede complementar la contabilidad mensual.",
  ],
  [
    "Pueden ayudar si mis libros estan atrasados?",
    "Si. La puesta al dia y limpieza de contabilidad estan disponibles despues de revisar el alcance.",
  ],
  [
    "Ayudan con planeacion para iniciar un negocio?",
    "Si. Base del Negocio Contratista ayuda a contratistas nuevos y en crecimiento a establecer sistemas financieros practicos.",
  ],
  [
    "Cuanto cuestan los servicios?",
    "Los paquetes mensuales comienzan con tarifas fijas, con cotizaciones personalizadas cuando un proyecto requiere mas alcance o complejidad.",
  ],
  [
    "Que pasa si recibo un aviso del IRS o del estado?",
    "Si es un cliente activo, suba el aviso a su portal privado del cliente en Google Drive y contactenos pronto. Revisaremos la situacion y coordinaremos con su CPA o abogado cuando sea necesario.",
  ],
  [
    "Que pasa si no entiendo mis reportes?",
    "Para eso estamos aqui. Explicamos reportes en lenguaje claro y conectamos los numeros con decisiones.",
  ],
  ["Apoyan a contratistas que hablan espanol?", spanishSupportNote],
];

export default function PreguntasFrecuentesPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.answers}>
      <PageHero
        eyebrow="Respuestas Antes de Necesitarlas"
        title="Respuestas claras antes de elegir un socio contable."
        text="Elegir un socio financiero es una decision importante. Estas respuestas ayudan a reducir incertidumbre antes de la primera conversacion."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />

      <section className="section">
        <div className="container faq-layout">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-copy">
          <h2>En caso de duda, llamenos.</h2>
          <p>
            Preferimos dedicar unos minutos a responder su pregunta hoy que ayudar
            a resolver un problema costoso manana. Ninguna pregunta es demasiado
            pequena cuando se trata de su negocio.
          </p>
          <p>
            Email{" "}
            <a className="text-link" href={`mailto:${contact.infoEmail}`}>
              {contact.infoEmail}
            </a>{" "}
            o llame al {contact.phone}.
          </p>
        </div>
      </section>

      <CTASection
        title="Todavia tiene preguntas?"
        text="Traiga sus preguntas a una consulta y hablaremos del siguiente paso practico."
      />
    </PageShell>
  );
}
