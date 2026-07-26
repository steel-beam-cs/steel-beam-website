import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import {
  journeyEs,
  proofPointsEs,
  routeMap,
  servicesEs,
} from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contabilidad y Apoyo Financiero para Contratistas",
  description:
    "Steel Beam Contractor Solutions LLC ayuda a contratistas con contabilidad, nomina, costos por proyecto y orientacion financiera practica.",
  alternates: {
    canonical: routeMap.es.home,
    languages: { en: routeMap.en.home, es: routeMap.es.home },
  },
};

const visitorPaths = [
  {
    label: "Estoy empezando mi negocio contratista.",
    href: routeMap.es.howWeHelp,
  },
  {
    label: "Mi contabilidad esta atrasada.",
    href: routeMap.es.cleanup,
  },
  {
    label: "Necesito ayuda con nomina.",
    href: routeMap.es.howWeHelp,
  },
  {
    label: "Necesito mejores costos por proyecto.",
    href: "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
  },
  {
    label: "Estoy creciendo y necesito mejores sistemas.",
    href: routeMap.es.howWeHelp,
  },
  {
    label: "Quiero un socio financiero de largo plazo.",
    href: routeMap.es.contact,
  },
];

export default function SpanishHomePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.home}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">Apoyo financiero para construccion</p>
          <h1 id="hero-title">
            Ayudando a Contratistas
            <span>a Construir Negocios Mas Fuertes.</span>
          </h1>
          <p className="hero-copy">
            Contabilidad profesional, nomina, costos por proyecto y orientacion
            financiera disenada especificamente para contratistas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href={routeMap.es.contact}>
              Programar Consulta Gratis
            </Link>
            <Link className="button button-outline button-large" href={routeMap.es.howWeHelp}>
              Ver Servicios
            </Link>
          </div>
          <div className="trust-row" aria-label="Indicadores de confianza Steel Beam">
            {proofPointsEs.map((point) => (
              <article className="trust-card" key={point}>
                <h2>{point}</h2>
                <p>Disenado para crear claridad, confianza y sistemas mas fuertes.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Empiece donde esta"
            title="Que describe mejor su situacion?"
            text="Steel Beam guia a contratistas al siguiente paso practico sin hacerlos buscar respuestas."
          />
          <div className="path-grid">
            {visitorPaths.map((path) => (
              <Link href={path.href} className="path-card" key={path.label}>
                <span>{path.label}</span>
                <strong>Recibir guia</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            <p className="eyebrow dark">Conozca a su socio financiero de construccion</p>
            <h2>Creado por alguien que ha estado en sus zapatos.</h2>
            <p>
              Steel Beam fue fundado por Adam Davis, ex dueno de empresa de
              construccion y CFO que entiende costos por proyecto, nomina, flujo
              de efectivo y la presion de manejar un negocio de construccion
              porque lo ha vivido.
            </p>
            <p className="quote">
              Tengo exito cuando mis clientes tienen exito. Quiero construir mi
              empresa sobre relaciones, no sobre ventas.
            </p>
            <Link className="text-link" href={routeMap.es.about}>
              Leer la historia de Adam
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-credentials-heading">
        <div className="container">
          <div className="credentials-block">
            <div className="credentials-intro">
              <p className="eyebrow dark">Credenciales profesionales</p>
              <h2 id="home-credentials-heading">
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

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Como ayudamos"
            title="Apoyo financiero alrededor de resultados reales para contratistas."
            text="Los servicios se organizan alrededor de problemas reales: libros limpios, nomina, rentabilidad por proyecto, sistemas y mejores decisiones."
          />
          <div className="card-grid three">
            {servicesEs.map((service) => (
              <Link className="info-card resource-link-card" href={service.href} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>Conocer mas</span>
              </Link>
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button-secondary" href={routeMap.es.howWeHelp}>
              Ver como ayudamos
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="El Proceso Steel Beam"
            title="Un proceso claro desde la primera conversacion hasta una relacion continua."
            text="Cada paso reduce incertidumbre y crea confianza en sus numeros."
          />
          <div className="journey-steel-beam" aria-label="Etapas del proceso Steel Beam">
            {journeyEs.map((item, index) => (
              <div className="journey-beam-stage" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </div>
            ))}
          </div>
          <div className="center-actions">
            <Link className="button button-primary" href={routeMap.es.journey}>
              Explorar el proceso
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div>
            <p className="eyebrow dark">Centro de Exito para Contratistas</p>
            <h2>Recursos practicos antes de ser cliente.</h2>
            <p>
              El Centro de Exito esta disenado para ensenar, guiar y ofrecer
              herramientas practicas a duenos de negocios de construccion que
              quieren mejor claridad financiera.
            </p>
            <Link className="text-link" href={routeMap.es.success}>
              Visitar el Centro de Exito
            </Link>
          </div>
          <div className="resource-preview">
            <Link href="/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos">
              <strong>Articulo</strong>
              <span>Por que el flujo de efectivo importa mas que los ingresos</span>
            </Link>
            <Link href="/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen">
              <strong>Calculadora</strong>
              <span>Calculadora de markup vs margen</span>
            </Link>
            <Link href="/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad">
              <strong>Lista</strong>
              <span>Lista mensual de contabilidad</span>
            </Link>
            <Link href={routeMap.es.cleanup}>
              <strong>Limpieza</strong>
              <span>Libros atrasados? Empiece aqui.</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Construyamos algo mas fuerte juntos."
        text="Ya sea que este empezando, poniendose al dia o preparando crecimiento, Steel Beam esta listo para ayudar."
      />
    </PageShell>
  );
}
