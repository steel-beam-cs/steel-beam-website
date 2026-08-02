export const contact = {
  phone: "(972) 975-9445",
  founderEmail: "adam.davis@steel-beam.org",
  infoEmail: "info@steel-beam.org",
  supportEmail: "support@steel-beam.org",
  billingEmail: "billing@steel-beam.org",
};

export const clientPortalNotice =
  "Existing Steel Beam clients receive a private Google Drive client portal invitation at their authorized email address. The private portal is used to upload documents, receive reports, and access client resources.";

export const clientPortalNoticeEs =
  "Los clientes existentes de Steel Beam reciben una invitacion privada al portal del cliente en Google Drive en su direccion de email autorizada. El portal privado se usa para subir documentos, recibir reportes y acceder a recursos para clientes.";

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

export const valuesEs = [
  "Integridad",
  "Respeto",
  "Mayordomia",
  "Excelencia",
  "Relacion",
];

export const milestonesEs = [
  "Servicio en el Ejercito de los Estados Unidos",
  "Estudios de matematicas",
  "Construccion de torres y gestion de proyectos",
  "Supervision de construccion y revision de pagos a contratistas",
  "Socio y CFO de una empresa de construccion de mas de $10M anuales",
  "Fundador de Steel Beam Contractor Solutions LLC",
];

export const proofPointsEs = [
  "Enfocado en contratistas",
  "Portal privado del cliente",
  "Precios mensuales fijos",
  "Creado por un ex contratista",
];

export const packagesEs = [
  {
    title: "Foundation",
    price: "Desde $350/mes",
    text: "Contabilidad mensual, conciliaciones, estados financieros, revision mensual y apoyo por email.",
  },
  {
    title: "Structural",
    price: "Desde $650/mes",
    text: "Foundation mas cuentas por pagar, cuentas por cobrar, seguimiento de impuesto sobre ventas, reuniones mensuales y apoyo prioritario.",
  },
  {
    title: "Steel Advantage",
    price: "Desde $995/mes",
    text: "Structural mas costos por proyecto, reportes de rentabilidad, pronostico de flujo de efectivo, asistencia de presupuesto y apoyo para CPA al cierre del ano.",
  },
];

export const cleanupIncludesEs = [
  "Revisar el archivo contable actual e identificar areas problematicas.",
  "Organizar registros bancarios, tarjetas, prestamos, nomina, proveedores y clientes.",
  "Categorizar ingresos y gastos con un plan de cuentas adecuado para contratistas.",
  "Conciliar cuentas bancarias y de tarjeta durante el periodo de limpieza.",
  "Marcar documentos faltantes, transacciones poco claras, duplicados y posibles errores.",
  "Preparar reportes financieros mas limpios para sus registros, CPA, prestamista o siguiente etapa de servicio.",
];

export const whenItFitsEs = [
  "Esta varios meses atrasado.",
  "Sus libros se iniciaron pero nunca se mantuvieron por completo.",
  "Las cuentas bancarias estan conectadas pero las transacciones no se revisaron.",
  "Su CPA pidio registros mas limpios antes de trabajar impuestos.",
  "No esta seguro de si sus reportes son exactos.",
  "Quiere pasar a contabilidad mensual con un punto de partida limpio.",
];

export const cleanupProcessEs = [
  {
    title: "Revision de Libros",
    text: "Revisamos el archivo actual, cuentas, estados, volumen de transacciones y registros disponibles.",
  },
  {
    title: "Plan de Limpieza",
    text: "Recibe un alcance claro, cronograma y cotizacion segun cuantos meses deben reconstruirse.",
  },
  {
    title: "Recoleccion de Documentos",
    text: "Reunimos estados, recibos, facturas, registros de nomina, documentos de prestamos y preguntas abiertas.",
  },
  {
    title: "Reconstruccion y Conciliacion",
    text: "Las transacciones se categorizan, las cuentas se concilian y los problemas se documentan mientras avanzamos.",
  },
  {
    title: "Revision y Siguientes Pasos",
    text: "Recibe reportes limpios, notas y una recomendacion para mantenerse al dia.",
  },
];

export const successCentersEs = [
  {
    title: "Centro de Conocimiento Steel Beam",
    text: "Articulos practicos sobre gestion financiera, costos por proyecto, flujo de efectivo, nomina, crecimiento y contabilidad de construccion.",
  },
  {
    title: "Biblioteca Blueprint Steel Beam",
    text: "Listas, hojas de trabajo, guias de inicio y herramientas de revision mensual para contratistas.",
  },
  {
    title: "Calculadoras para Contratistas",
    text: "Herramientas planeadas para margen de ganancia, punto de equilibrio, carga laboral, markup vs margen y planeacion de efectivo.",
  },
  {
    title: "Centro de Planeacion",
    text: "Calendarios fiscales, recordatorios de nomina, listas de fin de ano y recursos de planeacion trimestral.",
  },
  {
    title: "Blueprint Brief",
    text: "Un email mensual practico con un consejo de negocio, un recordatorio financiero, un recurso y un Steel Beam Insight.",
  },
  {
    title: "Historias de Exito de Contratistas",
    text: "Proximamente: historias de clientes que muestran como sistemas financieros organizados crearon claridad y confianza.",
  },
];

export const featuredResourcesEs = [
  {
    type: "Limpieza",
    title: "Libros atrasados? Empiece aqui.",
    text: "Un camino practico de limpieza contable para contratistas que necesitan reconstruir sus registros.",
    href: routeMap.es.cleanup,
  },
  {
    type: "Articulo",
    title: "Por que el flujo de efectivo importa mas que los ingresos",
    text: "Una explicacion practica de por que los contratistas pueden verse rentables en papel y aun asi sentir presion de efectivo.",
    href: "/es/centro-de-exito-para-contratistas/flujo-de-efectivo-vs-ingresos",
  },
  {
    type: "Calculadora",
    title: "Calculadora de markup vs margen",
    text: "Estime precio de venta, ganancia bruta y margen antes de enviar la siguiente propuesta.",
    href: "/es/centro-de-exito-para-contratistas/calculadora-markup-vs-margen",
  },
  {
    type: "Lista",
    title: "Lista mensual de contabilidad",
    text: "Una lista simple de fin de mes para mantener libros organizados y listos para revision.",
    href: "/es/centro-de-exito-para-contratistas/lista-mensual-de-contabilidad",
  },
  {
    type: "Guia",
    title: "Conceptos basicos de costos por proyecto",
    text: "Aprenda las categorias de costo que los contratistas deben seguir para entender rentabilidad por proyecto.",
    href: "/es/centro-de-exito-para-contratistas/conceptos-basicos-de-costos-por-proyecto",
  },
  {
    type: "Lista",
    title: "Que enviar a su contador",
    text: "Una lista mensual de documentos para reportes mas limpios y menos preguntas de ultimo minuto.",
    href: "/es/centro-de-exito-para-contratistas/que-enviar-a-su-contador",
  },
  {
    type: "Lista",
    title: "Lista de preparacion de nomina",
    text: "Una lista practica para organizar registros de nomina, tarjetas de tiempo e informacion de trabajadores.",
    href: "/es/centro-de-exito-para-contratistas/lista-de-nomina",
  },
  {
    type: "Lista",
    title: "Lista para libros limpios",
    text: "Use esto para ver si sus libros estan listos para apoyo mensual, limpieza o revision de CPA.",
    href: "/es/centro-de-exito-para-contratistas/lista-para-libros-limpios",
  },
];

export const portalUploadsEs = [
  "Estados bancarios",
  "Estados de tarjetas de credito",
  "Reportes de nomina",
  "Avisos fiscales",
  "Facturas de proveedores",
  "Facturas a clientes",
  "Recibos",
  "Registros de compra de equipo",
];

export const journeyScenariosEs = [
  "Empezar un negocio",
  "Libros atrasados",
  "Crecer mas rapido que sus sistemas",
  "Necesitar ayuda con nomina",
  "No saber que proyectos son rentables",
  "Querer libros organizados y tranquilidad",
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
