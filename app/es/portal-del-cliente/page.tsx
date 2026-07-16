import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { contact, routeMap } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Portal del Cliente",
  description:
    "Acceso al portal seguro del cliente de Steel Beam para compartir documentos y registros.",
  alternates: {
    canonical: routeMap.es.portal,
    languages: { en: routeMap.en.portal, es: routeMap.es.portal },
  },
};

export default function PortalDelClientePage() {
  return (
    <PageShell locale="es" currentPath={routeMap.es.portal}>
      <PageHero
        eyebrow="Portal del Cliente"
        title="Acceso seguro para documentos del cliente."
        text="Use el portal para compartir documentos sensibles cuando ya tenga acceso de cliente."
        primaryLabel="Abrir Portal Seguro"
        primaryHref={contact.shareFileUrl}
        secondaryLabel="Contactar Soporte"
        secondaryHref={routeMap.es.contact}
      />
    </PageShell>
  );
}
