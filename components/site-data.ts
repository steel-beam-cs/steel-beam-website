export const contact = {
  phone: "(972) 975-9445",
  founderEmail: "adam.davis@steel-beam.org",
  infoEmail: "info@steel-beam.org",
  supportEmail: "support@steel-beam.org",
  billingEmail: "billing@steel-beam.org",
  shareFileUrl: "https://steelbeam.sharefile.com",
};

export type Locale = "en" | "es";

export const company = {
  name: "Steel Beam Contractor Solutions LLC",
  slogan: "Solid Solutions, Reinforcing Your Business.",
  siteUrl: "https://steel-beam.org",
};

export const routeMap = {
  en: {
    home: "/",
    about: "/about",
    howWeHelp: "/how-we-help",
    cleanup: "/cleanup-bookkeeping",
    success: "/contractor-success-center",
    journey: "/client-journey",
    answers: "/answers",
    portal: "/client-portal",
    contact: "/contact",
  },
  es: {
    home: "/es",
    about: "/es/sobre-nosotros",
    howWeHelp: "/es/como-ayudamos",
    cleanup: "/es/limpieza-de-contabilidad",
    success: "/es/centro-de-exito-para-contratistas",
    journey: "/es/proceso-del-cliente",
    answers: "/es/preguntas-frecuentes",
    portal: "/es/portal-del-cliente",
    contact: "/es/contacto",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How We Help", href: "/how-we-help" },
  { label: "Success Center", href: "/contractor-success-center" },
  { label: "Client Journey", href: "/client-journey" },
  { label: "FAQs", href: "/answers" },
  { label: "Contact", href: "/contact" },
];

export const navItemsEs = [
  { label: "Inicio", href: routeMap.es.home },
  { label: "Nosotros", href: routeMap.es.about },
  { label: "Como Ayudamos", href: routeMap.es.howWeHelp },
  { label: "Centro de Exito", href: routeMap.es.success },
  { label: "Proceso", href: routeMap.es.journey },
  { label: "Preguntas", href: routeMap.es.answers },
  { label: "Contacto", href: routeMap.es.contact },
];

export const alternateRoutes = new Map<string, string>(
  [
    ...Object.keys(routeMap.en).flatMap((key) => {
      const routeKey = key as keyof typeof routeMap.en;
      return [
        [routeMap.en[routeKey], routeMap.es[routeKey]],
        [routeMap.es[routeKey], routeMap.en[routeKey]],
      ] satisfies [string, string][];
    }),
    ["/thank-you", "/es/gracias"],
    ["/es/gracias", "/thank-you"],
    [
      "/contractor-success-center/cash-flow-vs-revenue",
      "/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos",
    ],
    [
      "/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos",
      "/contractor-success-center/cash-flow-vs-revenue",
    ],
    [
      "/contractor-success-center/job-costing-basics",
      "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
    ],
    [
      "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
      "/contractor-success-center/job-costing-basics",
    ],
    [
      "/contractor-success-center/markup-vs-margin-calculator",
      "/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen",
    ],
    [
      "/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen",
      "/contractor-success-center/markup-vs-margin-calculator",
    ],
    [
      "/contractor-success-center/monthly-bookkeeping-checklist",
      "/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad",
    ],
    [
      "/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad",
      "/contractor-success-center/monthly-bookkeeping-checklist",
    ],
    [
      "/contractor-success-center/payroll-readiness-checklist",
      "/es/centro-de-exito-para-contratistas/lista-de-nomina",
    ],
    [
      "/es/centro-de-exito-para-contratistas/lista-de-nomina",
      "/contractor-success-center/payroll-readiness-checklist",
    ],
    [
      "/contractor-success-center/what-to-send-your-bookkeeper",
      "/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador",
    ],
    [
      "/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador",
      "/contractor-success-center/what-to-send-your-bookkeeper",
    ],
    [
      "/contractor-success-center/clean-books-readiness-checklist",
      "/es/centro-de-exito-para-contratistas/lista-para-libros-limpios",
    ],
    [
      "/es/centro-de-exito-para-contratistas/lista-para-libros-limpios",
      "/contractor-success-center/clean-books-readiness-checklist",
    ],
  ] satisfies [string, string][],
);

export const services = [
  {
    title: "Bookkeeping & Financial Organization",
    text: "Monthly bookkeeping, reconciliations, clean records, and financial reports that help you understand where your business stands.",
    href: "/how-we-help",
  },
  {
    title: "Payroll Support",
    text: "Standalone payroll support for contractors who need a reliable process for paying teams and organizing payroll records.",
    href: "/how-we-help",
  },
  {
    title: "Job Costing & Reporting",
    text: "Contractor-specific tracking that shows which jobs are profitable, where costs are moving, and what needs attention.",
    href: "/contractor-success-center/job-costing-basics",
  },
  {
    title: "Contractor Business Foundation",
    text: "Startup and systems consulting for contractors who want to build the right financial foundation from day one.",
    href: "/how-we-help",
  },
  {
    title: "Catch-Up & Cleanup",
    text: "Behind on your books? We help organize past records, reconcile accounts, and get your financial systems back on track.",
    href: "/cleanup-bookkeeping",
  },
  {
    title: "Advisory & Blueprint Reviews",
    text: "Practical business conversations that turn financial reports into clearer decisions about growth, cash flow, and risk.",
    href: "/how-we-help",
  },
];

export const servicesEs = [
  {
    title: "Contabilidad y Organizacion Financiera",
    text: "Contabilidad mensual, conciliaciones, registros limpios y reportes financieros para entender donde esta su negocio.",
    href: routeMap.es.howWeHelp,
  },
  {
    title: "Apoyo de Nomina",
    text: "Apoyo de nomina independiente para contratistas que necesitan un proceso confiable para pagar equipos y organizar registros.",
    href: routeMap.es.howWeHelp,
  },
  {
    title: "Costos por Proyecto y Reportes",
    text: "Seguimiento especifico para contratistas que muestra que proyectos son rentables, donde se mueven los costos y que necesita atencion.",
    href: routeMap.es.success,
  },
  {
    title: "Base del Negocio Contratista",
    text: "Consultoria de inicio y sistemas para contratistas que quieren construir la base financiera correcta desde el primer dia.",
    href: routeMap.es.howWeHelp,
  },
  {
    title: "Puesta al Dia y Limpieza",
    text: "Si sus libros estan atrasados, ayudamos a organizar registros, conciliar cuentas y recuperar sus sistemas financieros.",
    href: routeMap.es.cleanup,
  },
  {
    title: "Asesoria y Revisiones Blueprint",
    text: "Conversaciones practicas que convierten reportes financieros en decisiones mas claras sobre crecimiento, efectivo y riesgo.",
    href: routeMap.es.howWeHelp,
  },
];

export const journey = [
  {
    title: "Discovery",
    subtitle: "Understanding your business",
    text: "We learn your goals, challenges, current systems, and what success should look like.",
  },
  {
    title: "Foundation",
    subtitle: "Building the financial base",
    text: "We confirm the service plan, organize records, and establish secure document sharing.",
  },
  {
    title: "Framework",
    subtitle: "Creating reliable systems",
    text: "We review accounts, workflows, job costing, payroll needs, and cleanup priorities.",
  },
  {
    title: "Reinforcement",
    subtitle: "Monthly support",
    text: "We deliver recurring bookkeeping, reporting, payroll support, and contractor-focused visibility.",
  },
  {
    title: "Blueprint Review",
    subtitle: "Turning reports into decisions",
    text: "We discuss cash flow, profitability, job performance, trends, goals, and next steps.",
  },
  {
    title: "Partnership",
    subtitle: "Growing together",
    text: "We adapt as your business grows, helping you improve systems and build with confidence.",
  },
];

export const journeyEs = [
  {
    title: "Descubrimiento",
    subtitle: "Entender su negocio",
    text: "Aprendemos sus metas, retos, sistemas actuales y como debe verse el exito.",
  },
  {
    title: "Base",
    subtitle: "Construir la base financiera",
    text: "Confirmamos el plan de servicio, organizamos registros y establecemos intercambio seguro de documentos.",
  },
  {
    title: "Estructura",
    subtitle: "Crear sistemas confiables",
    text: "Revisamos cuentas, flujos de trabajo, costos por proyecto, nomina y prioridades de limpieza.",
  },
  {
    title: "Refuerzo",
    subtitle: "Apoyo mensual",
    text: "Entregamos contabilidad recurrente, reportes, apoyo de nomina y visibilidad enfocada en contratistas.",
  },
  {
    title: "Revision Blueprint",
    subtitle: "Convertir reportes en decisiones",
    text: "Hablamos de efectivo, rentabilidad, proyectos, tendencias, metas y siguientes pasos.",
  },
  {
    title: "Relacion Continua",
    subtitle: "Crecer juntos",
    text: "Nos adaptamos mientras crece su negocio y ayudamos a mejorar sistemas con confianza.",
  },
];

export const values = [
  "Integrity",
  "Respect",
  "Stewardship",
  "Excellence",
  "Partnership",
];

export const spanishSupportNote =
  "Steel Beam apoya a contratistas que hablan espanol con paginas traducidas, documentos en espanol y asistencia de idioma cuando este disponible. No se anuncia como una oficina completamente bilingue.";

export const downloads = {
  en: [
    ["Contractor Intake Form", "/resources/en/contractor-intake-form.md"],
    ["Engagement Letter Overview", "/resources/en/engagement-letter-overview.md"],
    ["Client Onboarding Guide", "/resources/en/client-onboarding-guide.md"],
    ["Client Playbook", "/resources/en/client-playbook.md"],
    ["FAQ", "/resources/en/faq.md"],
  ],
  es: [
    ["Formulario de Inicio para Contratistas", "/resources/es/formulario-de-inicio-para-contratistas.md"],
    ["Resumen de Carta de Compromiso", "/resources/es/resumen-de-carta-de-compromiso.md"],
    ["Guia de Incorporacion del Cliente", "/resources/es/guia-de-incorporacion-del-cliente.md"],
    ["Manual del Cliente", "/resources/es/manual-del-cliente.md"],
    ["Preguntas Frecuentes", "/resources/es/preguntas-frecuentes.md"],
  ],
} as const;
