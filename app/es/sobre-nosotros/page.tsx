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
              base. Adam cuenta con la certificacion de Intuit Bookkeeping, es
              QuickBooks Online ProAdvisor Nivel 1 y se graduo de Client Advisory
              Services Foundations. Continua su educacion profesional por medio
              de la ProAdvisor Academy de Intuit.
            </p>
            <p className="quote">
              El objetivo es construir relaciones, no vender promesas exageradas.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section section-soft"
        aria-labelledby="credenciales-heading"
      >
        <div className="container">
          <div className="credentials-block">
            <div className="credentials-intro">
              <p className="eyebrow dark">Credenciales profesionales</p>
              <h2 id="credenciales-heading">
                Experiencia certificada en QuickBooks. Apoyo asesor practico.
              </h2>
              <p className="credentials-lede">
                Steel Beam combina conocimiento certificado de QuickBooks con
                orientacion financiera practica para contratistas.
              </p>
            </div>

            <div className="credentials-grid">
              <article className="credential-item">
                <div className="credential-badge">
                  <Image
                    src="/images/intuit-quickbooks-level-1-certified.png"
                    alt="Insignia Intuit ProAdvisor QuickBooks Nivel 1 certificado"
                    width={600}
                    height={600}
                  />
                </div>
                <p className="credential-label">
                  QuickBooks Online ProAdvisor Level 1
                </p>
              </article>

              <article className="credential-item">
                <div className="credential-badge">
                  <Image
                    src="/images/intuit-cas-foundations-graduate.png"
                    alt="Insignia Intuit ProAdvisor Client Advisory Services Foundations Graduate"
                    width={600}
                    height={600}
                  />
                </div>
                <p className="credential-label">
                  Client Advisory Services Foundations Graduate
                </p>
              </article>

              <article className="credential-item credential-item-secondary">
                <div className="credential-badge credential-badge-secondary">
                  <Image
                    src="/images/intuit-proadvisor-silver.png"
                    alt="Insignia Intuit ProAdvisor Silver firm-tier"
                    width={600}
                    height={600}
                  />
                </div>
                <p className="credential-label">
                  Intuit ProAdvisor — Silver Firm Tier
                </p>
              </article>
            </div>
            <p className="credential-disclaimer">
              Intuit y QuickBooks son marcas comerciales de Intuit Inc. Se
              mencionan solo para identificar capacitacion y educacion obtenida;
              no se implica respaldo ni asociacion.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Construyamos una base financiera mas fuerte." text="Hablemos de sus libros, proyectos, nomina y metas." />
    </PageShell>
  );
}
