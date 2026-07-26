import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { journeyEs, routeMap, servicesEs } from "@/components/site-data";

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
  ["Estoy empezando mi negocio contratista.", routeMap.es.howWeHelp],
  ["Mi contabilidad esta atrasada.", routeMap.es.cleanup],
  ["Necesito ayuda con nomina.", routeMap.es.howWeHelp],
  ["Necesito mejores costos por proyecto.", routeMap.es.success],
  ["Estoy creciendo y necesito mejores sistemas.", routeMap.es.howWeHelp],
  ["Quiero un socio financiero de largo plazo.", routeMap.es.contact],
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
            Contabilidad, nomina, costos por proyecto y orientacion financiera
            practica para contratistas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" href={routeMap.es.contact}>
              Programar Consulta Gratis
            </Link>
            <Link className="button button-outline button-large" href={routeMap.es.howWeHelp}>
              Ver Servicios
            </Link>
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
            {visitorPaths.map(([label, href]) => (
              <Link href={href} className="path-card" key={label}>
                <span>{label}</span>
                <strong>Recibir guia</strong>
              </Link>
            ))}
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
        </div>
      </section>

      <CTASection
        title="Construyamos algo mas fuerte juntos."
        text="Ya sea que este empezando, poniendose al dia o preparando crecimiento, Steel Beam esta listo para ayudar."
      />
    </PageShell>
  );
}
