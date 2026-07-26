import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { milestonesEs, routeMap, valuesEs } from "@/components/site-data";

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
        title="Creado por alguien que ha estado en sus zapatos."
        text="Steel Beam combina experiencia en construccion, liderazgo financiero, lecciones aprendidas y el compromiso de ayudar a contratistas a construir negocios mas fuertes."
        secondaryLabel="Como Ayudamos"
        secondaryHref={routeMap.es.howWeHelp}
      />

      <section className="section">
        <div className="container split">
          <div className="portrait-card">
            <Image
              src="/images/founder-adam-davis.png"
              alt="Adam Davis en un espacio financiero para contratistas"
              width={720}
              height={920}
              sizes="260px"
            />
          </div>
          <div>
            <p className="eyebrow dark">Conozca a Adam Davis</p>
            <h2>De soldado a contratista a socio financiero.</h2>
            <p>
              Adam Davis fundo Steel Beam Contractor Solutions LLC despues de una
              carrera marcada por servicio militar, matematicas, construccion
              practica, gestion de proyectos, supervision de obra y liderazgo
              financiero.
            </p>
            <p>
              Como socio y CFO de una empresa de construccion que crecio mas alla
              de $10 millones en ingresos anuales, Adam manejo contabilidad,
              nomina, costos por proyecto, flujo de efectivo, reportes y
              decisiones financieras estrategicas desde la posicion del dueno.
            </p>
            <p>
              La experiencia real en finanzas de construccion sigue siendo la
              base. Adam cuenta con la certificacion de Intuit Bookkeeping, es
              QuickBooks Online ProAdvisor Nivel 1 y se graduo de Client Advisory
              Services Foundations. Continua su educacion profesional por medio
              de la ProAdvisor Academy de Intuit.
            </p>
            <p className="quote">
              Steel Beam no se construyo desde la teoria. Se construyo desde la
              experiencia, la adversidad y el compromiso de ayudar a
              contratistas a evitar errores que tuve que aprender por las malas.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Experiencia que importa"
            title="Cada paso preparo a Steel Beam para servir contratistas."
          />
          <div className="timeline">
            {milestonesEs.map((item) => (
              <article key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section why-exists-section"
        aria-labelledby="why-exists-heading"
      >
        <div className="container">
          <div className="why-exists-copy">
            <div className="section-heading why-exists-heading">
              <p className="eyebrow dark">Por que existe Steel Beam</p>
              <h2 id="why-exists-heading">Por que existe Steel Beam</h2>
            </div>
            <div className="why-exists-body">
              <p>
                Muchos contratistas son constructores excepcionales, pero nunca
                aprendieron a construir el lado financiero de su negocio. Steel
                Beam existe para cerrar esa brecha con orientacion honesta,
                sistemas financieros confiables y relaciones de largo plazo
                fundadas en integridad, respeto y confianza.
              </p>
              <p>
                La empresa fue creada para ser el tipo de socio financiero que
                Adam desearia que todo contratista tuviera: practico, organizado,
                justo y genuinamente invertido en el exito del cliente.
              </p>
            </div>
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
                <p className="credential-label">QuickBooks Online ProAdvisor Level 1</p>
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
                <p className="credential-label">Client Advisory Services Foundations Graduate</p>
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
                <p className="credential-label">Intuit ProAdvisor — Silver Firm Tier</p>
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

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Valores fundamentales"
            title="Los valores que guian cada relacion con clientes."
          />
          <div className="card-grid five">
            {valuesEs.map((value) => (
              <article className="value-card" key={value}>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Construyamos una base financiera mas fuerte."
        text="Hablemos de sus libros, proyectos, nomina y metas."
      />
    </PageShell>
  );
}
