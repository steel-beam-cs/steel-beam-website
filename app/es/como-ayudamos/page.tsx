import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { packagesEs, routeMap, servicesEs } from "@/components/site-data";

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
        title="Apoyo financiero disenado para la forma real en que trabajan los contratistas."
        text="No solo conciliamos cuentas. Ayudamos a contratistas a organizar registros, entender rentabilidad por proyecto, manejar nomina y tomar mejores decisiones."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Servicios principales"
            title="Elija el apoyo que su negocio necesita ahora."
            text="Cada servicio esta disenado para crear claridad, reducir estres y apoyar crecimiento a largo plazo."
          />
          <div className="card-grid three">
            {servicesEs.map((service) => (
              <Link className="info-card resource-link-card" href={service.href} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="mini-note">
                  Esto puede ser adecuado si quiere mas confianza en sus numeros.
                </div>
                <span>Conocer mas</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Paquetes mensuales"
            title="Precios mensuales fijos con cotizaciones personalizadas cuando se necesitan."
          />
          <div className="card-grid three">
            {packagesEs.map((item) => (
              <article className="pricing-card" key={item.title}>
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow dark">Base del Negocio Contratista</p>
          <h2>Empiece fuerte. Construya con inteligencia. Crezca con confianza.</h2>
          <p>
            Este servicio de asesoria ayuda a contratistas nuevos y en
            crecimiento a establecer sistemas financieros practicos desde el
            primer dia, incluyendo configuracion de QuickBooks, plan de cuentas,
            flujos de facturacion, organizacion de registros, documentos seguros
            y planeacion de procesos contables.
          </p>
          <p>
            Steel Beam no ofrece asesoria legal ni fiscal. Cuando corresponde,
            coordinamos con su CPA o abogado para que su negocio cuente con el
            equipo profesional adecuado.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Limpieza de contabilidad</p>
            <h2>Estar atrasado no significa estar roto.</h2>
            <p>
              Si su contabilidad se quedo atras, Steel Beam puede ayudar a
              revisar el archivo actual, organizar registros faltantes, conciliar
              cuentas y crear una base mas limpia para apoyo mensual.
            </p>
          </div>
          <div className="panel">
            <h3>La limpieza comienza desde $250 por mes revisado.</h3>
            <p>
              Proyectos anuales directos pueden cotizarse en $2,500. Archivos mas
              complejos, registros faltantes, impuestos sobre ventas, preguntas
              de nomina o multiples entidades pueden requerir cotizacion
              personalizada.
            </p>
            <Link className="button button-primary" href={routeMap.es.cleanup}>
              Explorar Limpieza de Contabilidad
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Hablemos de lo que necesita ahora."
        text="Una consulta clara ayuda a identificar el mejor siguiente paso para sus libros, nomina o reportes."
      />
    </PageShell>
  );
}
