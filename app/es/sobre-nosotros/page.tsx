import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Sobre Steel Beam",
  description:
    "Conozca Steel Beam Contractor Solutions LLC y su apoyo financiero honesto y enfocado en contratistas.",
  alternates: {
    canonical: routeMap.es.about,
    languages: { en: routeMap.en.about, es: routeMap.es.about },
  },
};

export default function SobreNosotrosPage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.about}>
      <PageHero
        eyebrow="Sobre Steel Beam"
        title="Creado por alguien que conoce el trabajo del contratista."
        text="Steel Beam combina experiencia en construccion, liderazgo financiero y el compromiso de ayudar a contratistas a construir negocios mas fuertes."
        primaryLabel="Programar Consulta"
        primaryHref={routeMap.es.contact}
      />
      <section className="section section-soft">
        <div className="container split">
          <div className="portrait-card">
            <Image
              src="/images/founder-adam-davis.png"
              alt="Adam Davis, fundador de Steel Beam Contractor Solutions LLC"
              width={720}
              height={920}
              sizes="260px"
            />
          </div>
          <div>
            <p className="eyebrow dark">Conozca a Adam Davis</p>
            <h2>De experiencia en construccion a socio financiero.</h2>
            <p>
              Steel Beam existe porque muchos contratistas saben construir
              proyectos excelentes, pero no siempre reciben los sistemas,
              reportes y apoyo administrativo necesarios para construir negocios
              excelentes.
            </p>
            <p className="quote">
              El objetivo es construir relaciones, no vender promesas exageradas.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Construyamos una base financiera mas fuerte." text="Hablemos de sus libros, proyectos, nomina y metas." />
    </PageShell>
  );
}
