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
            <p>
              La experiencia real en finanzas de construccion sigue siendo la
              base. Adam tambien cuenta con certificacion de Intuit Bookkeeping
              y continua su educacion profesional por medio de Intuit Academy
              mientras trabaja para obtener la certificacion QuickBooks
              ProAdvisor.
            </p>
            <p className="quote">
              El objetivo es construir relaciones, no vender promesas exageradas.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container credential-section">
          <div>
            <p className="eyebrow dark">Credenciales profesionales</p>
            <h2>Experiencia en construccion + conocimiento certificado en contabilidad.</h2>
            <p>
              Steel Beam combina liderazgo financiero vivido dentro de una
              empresa de construccion con capacitacion profesional de
              contabilidad por medio de Intuit.
            </p>
            <ul className="credential-list">
              <li>Certificacion de Intuit Bookkeeping</li>
              <li>Educacion profesional continua por medio de Intuit Academy</li>
              <li>Trabajando hacia la certificacion QuickBooks ProAdvisor</li>
            </ul>
            <p className="credential-disclaimer">
              Intuit y QuickBooks son marcas comerciales de Intuit Inc. Se
              mencionan solo para identificar capacitacion y educacion obtenida;
              no se implica respaldo ni asociacion.
            </p>
          </div>
          <div className="credential-badge" aria-label="Insignia de certificacion Intuit Bookkeeping">
            <Image
              src="/images/intuit-bookkeeping-certification.png"
              alt="Insignia de certificacion Intuit Bookkeeping"
              width={320}
              height={320}
              sizes="160px"
            />
          </div>
        </div>
      </section>
      <CTASection title="Construyamos una base financiera mas fuerte." text="Hablemos de sus libros, proyectos, nomina y metas." />
    </PageShell>
  );
}
