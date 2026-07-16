import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact, routeMap, spanishSupportNote } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a Steel Beam para hablar sobre contabilidad, nomina, costos por proyecto, limpieza y apoyo financiero para contratistas.",
  alternates: {
    canonical: routeMap.es.contact,
    languages: { en: routeMap.en.contact, es: routeMap.es.contact },
  },
};

export default function ContactoPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.contact}>
      <PageHero
        eyebrow="Contacto"
        title="Empiece con una conversacion sobre sus libros, nomina y proyectos."
        text="Cuente a Steel Beam que funciona, que esta desordenado y que necesita entender mejor."
        primaryLabel="Llamar a Steel Beam"
        primaryHref={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
      />
      <section className="section">
        <div className="container contact-layout">
          <form className="consultation-form" action="https://formspree.io/f/mqevryyw" method="POST">
            <div className="form-grid">
              <label>
                Nombre
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Empresa u oficio
              <input name="company_trade" type="text" autoComplete="organization" />
            </label>
            <label>
              En que necesita ayuda?
              <textarea name="message" rows={5} required />
            </label>
            <button className="button button-primary" type="submit">
              Enviar Mensaje
            </button>
          </form>
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
            <p>General: <a href={`mailto:${contact.infoEmail}`}>{contact.infoEmail}</a></p>
            <p>Soporte: <a href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</a></p>
            <p>Telefono: {contact.phone}</p>
            <p>{spanishSupportNote}</p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
