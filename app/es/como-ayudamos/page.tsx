import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { routeMap, servicesEs } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Como Ayudamos a Contratistas",
  description:
    "Servicios de contabilidad, nomina, costos por proyecto, limpieza y asesoria practica para contratistas.",
  alternates: {
    canonical: routeMap.es.howWeHelp,
    languages: { en: routeMap.en.howWeHelp, es: routeMap.es.howWeHelp },
  },
};

export default function ComoAyudamosPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.howWeHelp}>
      <PageHero
        eyebrow="Como Ayudamos"
        title="Apoyo financiero para las partes que mas presionan a los contratistas."
        text="Steel Beam ayuda con libros limpios, nomina, costos por proyecto, limpieza de registros y conversaciones practicas sobre el negocio."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Servicios"
            title="Elija el apoyo que coincide con su siguiente paso."
            text="Cada servicio esta disenado para mejorar claridad, organizacion y confianza sin promesas exageradas."
          />
          <div className="card-grid three">
            {servicesEs.map((service) => (
              <Link className="info-card resource-link-card" href={service.href} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>Hablar sobre esto</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Hablemos de lo que necesita ahora." text="Una consulta clara ayuda a identificar el mejor siguiente paso para sus libros, nomina o reportes." />
    </PageShell>
  );
}
