import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact, routeMap, spanishSupportNote } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Empecemos la Conversacion",
  description:
    "Programe una consulta gratis con Steel Beam Contractor Solutions LLC para hablar de contabilidad, nomina, costos por proyecto, limpieza o apoyo financiero para contratistas.",
  alternates: {
    canonical: routeMap.es.contact,
    languages: { en: routeMap.en.contact, es: routeMap.es.contact },
  },
};

export default function ContactoPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.contact}>
      <PageHero
        eyebrow="Empecemos la Conversacion"
        title="Toda relacion exitosa comienza entendiendo su negocio."
        text="Cuentenos donde esta hoy, en que necesita ayuda y como deberia verse el exito dentro de seis meses."
        primaryLabel="Llamar a Steel Beam"
        primaryHref={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
      />

      <section className="section">
        <div className="container contact-layout">
          <ConsultationForm locale="es" />

          <aside className="contact-card">
            <h2>Que pasa despues?</h2>
            <ol className="number-list">
              <li>Revisamos su informacion.</li>
              <li>Le contactamos dentro de un dia habil.</li>
              <li>Programamos una consulta.</li>
              <li>Hablamos de metas y retos.</li>
              <li>Si hay buen ajuste, recomendamos siguientes pasos.</li>
            </ol>
            <hr />
            <p>
              General: <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a>
            </p>
            <p>
              Soporte: <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a>
            </p>
            <p>
              Facturacion: <a href={`mailto:${contact.billingEmail}`}>{contact.billingEmail}</a>
            </p>
            <p>Telefono: {contact.phone}</p>
            <p>{spanishSupportNote}</p>
          </aside>
        </div>
      </section>

      <CTASection
        title="No necesita todas las respuestas antes de hablar."
        text="Traiga sus preguntas, metas y retos actuales. Ayudaremos a identificar el siguiente paso practico."
      />
    </PageShell>
  );
}
