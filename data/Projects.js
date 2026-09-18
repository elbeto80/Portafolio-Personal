/**
 * `shot`  → captura real alojada en /public. Si no existe, la tarjeta dibuja
 *           un mock abstracto según `group` (mejor que una foto de stock).
 * `group` → clave estable para los filtros (independiente del idioma).
 */
export const projects_es = [
  {
    name: "wansy",
    title: "Wansy",
    subtitle: "Proyecto personal",
    category: "SaaS",
    group: "saas",
    featured: true,
    problem:
      "Los equipos que atienden clientes por WhatsApp desde varias líneas pierden el hilo de las conversaciones y responden tarde.",
    description:
      "Plataforma SaaS que centraliza la atención al cliente mediante la API oficial de WhatsApp. Permite gestionar múltiples líneas, conversaciones en tiempo real y contactos, con respuestas automáticas mediante inteligencia artificial y una base de conocimiento propia, además de transferir la atención a agentes humanos.",
    technologies:
      "PHP, Laravel, React, TypeScript, Tailwind CSS, Redux Toolkit, PostgreSQL, pgvector, Redis, Laravel Reverb, WhatsApp API",
    shot: "/image.png",
  },
  {
    name: "simazo",
    title: "Simazo",
    category: "Plataforma",
    group: "platform",
    problem:
      "Coordinar cuadrillas, agendas y materiales para cientos de instalaciones y mantenimientos de fibra sin visibilidad en tiempo real.",
    description:
      "Plataforma de gestión de operaciones de campo para un proveedor de fibra óptica: agendamiento y asignación de cuadrillas, monitor en vivo de instalaciones, mantenimientos, traslados y retiros, control de inventario por bodega, elementos de red, formularios SST y reportes.",
    technologies:
      "PHP, Laravel, PostgreSQL, React, TypeScript, Vite, Tailwind CSS, AWS, Mapas, ETL",
  },
  {
    name: "wasapi",
    title: "Wasapi",
    category: "SaaS",
    group: "saas",
    problem:
      "La atención y las ventas por WhatsApp quedan dispersas y manuales, sin automatización ni segmentación.",
    description:
      "Plataforma que centraliza y automatiza la comunicación vía WhatsApp, ofreciendo herramientas como chatbots dinámicos y con inteligencia artificial, campañas de mensajería, segmentación de audiencia y más. Facilita la atención al cliente, impulsa las ventas y simplifica las comunicaciones.",
    technologies:
      "PHP, Laravel, Vue.js, Nuxt.js, MySQL, MongoDB, AWS, Vuetify, WhatsApp API, Pusher",
    shot: "/project1.png",
  },
  {
    name: "wasapi-app",
    title: "Wasapi - App móvil",
    category: "Móvil",
    group: "mobile",
    problem:
      "Atender las conversaciones de WhatsApp del negocio fuera del escritorio, sin perder contexto.",
    description:
      "Aplicación móvil que centraliza y simplifica la comunicación vía WhatsApp. Permite visualizar y enviar mensajes, buscar y filtrar conversaciones, y gestionar chats. Ofrece soporte para mensajes multimedia y cuenta con modos claro y oscuro para una experiencia personalizada y accesible.",
    technologies: "React, React Native, Expo, React Native Paper, Firebase",
  },
  {
    name: "stars-crm",
    title: "CRM - STARS PLASTIC SURGERY",
    category: "CRM",
    group: "platform",
    problem:
      "La comunicación entre la clínica y sus pacientes queda repartida entre canales, sin trazabilidad ni seguimiento.",
    description:
      "Una innovadora herramienta diseñada para gestionar de manera integral la comunicación entre una clínica y sus pacientes. Incluye funciones avanzadas como chat en tiempo real, gestión de contactos, administración de proveedores y comunicaciones integradas, ofreciendo una solución completa y eficiente.",
    technologies: "PHP, Laravel, Vue.js, Nuxt.js, MySQL, Vuetify",
  },
  {
    name: "stars-app",
    title: "STARS PLASTIC SURGERY - App móvil",
    category: "Móvil",
    group: "mobile",
    problem:
      "Los pacientes necesitan gestionar citas, recordatorios e información médica desde el móvil.",
    description:
      "Desarrollé una aplicación móvil para gestionar la comunicación entre una clínica y sus pacientes. La app incluye funcionalidades como chat en tiempo real, gestión de citas, recordatorios y acceso a información médica relevante, brindando una solución eficiente para facilitar la interacción.",
    technologies: "React, React Native, Expo, React Native Paper, Firebase",
  },
  {
    name: "match-fit-app",
    title: "Match Fit - App móvil",
    category: "Móvil · IA",
    group: "mobile",
    problem:
      "Los jugadores de fútbol no tienen acceso a rutinas de entrenamiento adaptadas a su nivel.",
    description:
      "Aplicación móvil que permite generar rutinas de entrenamiento mediante IA para jugadores de fútbol. Ofrece programas de entrenamiento adaptados a diferentes niveles, seguimiento de progreso, enfocados en mejorar la fuerza, velocidad y condición física de los jugadores, desde principiantes hasta avanzados.",
    technologies:
      "React, React Native, Expo, React Native Paper, Firebase, Node.js, Express, AWS",
  },
  {
    name: "metis-foundation",
    title: "Metis Foundation",
    category: "Plataforma",
    group: "platform",
    problem:
      "El seguimiento del gasto de los grants de investigación es manual y poco transparente.",
    description:
      "Plataforma innovadora diseñada para gestionar y optimizar los gastos de los grants. Permite asignar investigadores, generar y descargar informes detallados, y acceder a estadísticas avanzadas para un monitoreo eficiente y transparente del manejo de los recursos en todo momento.",
    technologies: "PHP, Laravel, Vue.js, Nuxt.js, MySQL, Vuetify, Quickbooks",
  },
  {
    name: "master-2000",
    title: "Master 2000 - Gestión Académica",
    category: "Gestión",
    group: "platform",
    problem:
      "Los procesos académicos y administrativos de las instituciones educativas siguen siendo manuales.",
    description:
      "Software especializado en la gestión académica para instituciones educativas. Permite optimizar procesos administrativos y académicos mediante funcionalidades como la gestión de matrículas, control de notas y asistencia, comunicación entre docentes y estudiantes, y generación de reportes personalizados.",
    technologies: "PHP, Laravel, Vue.js, MySQL, SQL Server, Bootstrap, jQuery",
  },
  {
    name: "dominus-ingenieria",
    title: "Dominus - Ingeniería Apropiada",
    category: "Plataforma",
    group: "platform",
    problem:
      "Las estaciones de servicio operan sin control de inventario ni visibilidad de las ventas en tiempo real.",
    description:
      "Plataforma diseñada para optimizar la operación de estaciones de servicio de combustible. Proporciona herramientas para el control de inventarios, gestión de ventas, y ofrece reportes detallados y acceso a información en tiempo real, mejorando la eficiencia y la toma de decisiones en las estaciones de servicio.",
    technologies:
      "PHP, Laravel, React, Vue.js, MySQL, SQL Server, Bootstrap, jQuery",
  },
];

export const projects_en = [
  {
    name: "wansy",
    title: "Wansy",
    subtitle: "Personal project",
    category: "SaaS",
    group: "saas",
    featured: true,
    problem:
      "Teams handling customers over WhatsApp from several lines lose track of conversations and reply late.",
    description:
      "SaaS platform that centralizes customer support through the official WhatsApp API. It manages multiple lines, real-time conversations, and contacts, with AI-powered automated replies backed by a custom knowledge base and the ability to hand conversations over to human agents.",
    technologies:
      "PHP, Laravel, React, TypeScript, Tailwind CSS, Redux Toolkit, PostgreSQL, pgvector, Redis, Laravel Reverb, WhatsApp API",
    shot: "/image.png",
  },
  {
    name: "simazo",
    title: "Simazo",
    category: "Platform",
    group: "platform",
    problem:
      "Coordinating crews, schedules, and materials for hundreds of fiber installations and maintenance jobs with no real-time visibility.",
    description:
      "Field operations management platform for a fiber-optic provider: crew scheduling and assignment, live monitoring of installations, maintenance, transfers, and disconnections, per-warehouse inventory control, network elements, occupational safety (OHS) forms, and reports.",
    technologies:
      "PHP, Laravel, PostgreSQL, React, TypeScript, Vite, Tailwind CSS, AWS, Maps, ETL",
  },
  {
    name: "wasapi",
    title: "Wasapi",
    category: "SaaS",
    group: "saas",
    problem:
      "Customer support and sales over WhatsApp stay scattered and manual, with no automation or segmentation.",
    description:
      "Platform that centralizes and automates communication via WhatsApp, offering tools like dynamic and AI-powered chatbots, messaging campaigns, audience segmentation, and more. It facilitates customer service, boosts sales, and simplifies communications.",
    technologies:
      "PHP, Laravel, Vue.js, Nuxt.js, MySQL, MongoDB, AWS, Vuetify, WhatsApp API, Pusher",
    shot: "/project1.png",
  },
  {
    name: "wasapi-app",
    title: "Wasapi - Mobile App",
    category: "Mobile",
    group: "mobile",
    problem:
      "Handling the business' WhatsApp conversations away from the desktop, without losing context.",
    description:
      "Mobile application that centralizes and simplifies communication via WhatsApp. It allows users to view and send messages, search and filter conversations, and manage chats. It supports multimedia messages and includes light and dark modes for a personalized and accessible experience.",
    technologies: "React, React Native, Expo, React Native Paper, Firebase",
  },
  {
    name: "stars-crm",
    title: "CRM - STARS PLASTIC SURGERY",
    category: "CRM",
    group: "platform",
    problem:
      "Communication between the clinic and its patients is split across channels, with no traceability or follow-up.",
    description:
      "An innovative tool designed to comprehensively manage communication between a clinic and its patients. It includes advanced features like real-time chat, contact management, supplier administration, and integrated communications, offering a complete and efficient solution.",
    technologies: "PHP, Laravel, Vue.js, Nuxt.js, MySQL, Vuetify",
  },
  {
    name: "stars-app",
    title: "STARS PLASTIC SURGERY - Mobile App",
    category: "Mobile",
    group: "mobile",
    problem:
      "Patients need to manage appointments, reminders, and medical information from their phone.",
    description:
      "I developed a mobile application to manage communication between a clinic and its patients. The app includes features like real-time chat, appointment management, reminders, and access to relevant medical information, providing an efficient solution to facilitate interaction.",
    technologies: "React, React Native, Expo, React Native Paper, Firebase",
  },
  {
    name: "match-fit-app",
    title: "Match Fit - Mobile App",
    category: "Mobile · AI",
    group: "mobile",
    problem:
      "Soccer players have no access to training routines tailored to their level.",
    description:
      "Mobile application that generates training routines through AI for soccer players. It offers training programs tailored to different levels, progress tracking, and focuses on improving strength, speed, and physical condition for players ranging from beginners to advanced.",
    technologies:
      "React, React Native, Expo, React Native Paper, Firebase, Node.js, Express, AWS",
  },
  {
    name: "metis-foundation",
    title: "Metis Foundation",
    category: "Platform",
    group: "platform",
    problem:
      "Tracking how research grants are spent is manual and far from transparent.",
    description:
      "Innovative platform designed to manage and optimize grant expenses. It allows assigning researchers, generating and downloading detailed reports, and accessing advanced statistics for efficient and transparent resource management at all times.",
    technologies: "PHP, Laravel, Vue.js, Nuxt.js, MySQL, Vuetify, Quickbooks",
  },
  {
    name: "master-2000",
    title: "Master 2000 - Academic Management",
    category: "Management",
    group: "platform",
    problem:
      "Academic and administrative processes at educational institutions are still manual.",
    description:
      "Software specialized in academic management for educational institutions. It optimizes administrative and academic processes through features like enrollment management, grade and attendance tracking, teacher-student communication, and personalized report generation.",
    technologies: "PHP, Laravel, Vue.js, MySQL, SQL Server, Bootstrap, jQuery",
  },
  {
    name: "dominus-ingenieria",
    title: "Dominus - Ingeniería Apropiada",
    category: "Platform",
    group: "platform",
    problem:
      "Fuel service stations operate with no inventory control and no real-time visibility of sales.",
    description:
      "Platform designed to optimize the operation of fuel service stations. It provides tools for inventory control, sales management, and offers detailed reports and real-time information access, improving efficiency and decision-making in service stations.",
    technologies:
      "PHP, Laravel, React, Vue.js, MySQL, SQL Server, Bootstrap, jQuery",
  },
];

export const projects_link = {
  wansy: [
    {
      link: "https://wansy.app",
      icon: "web",
      label: "wansy.app",
    },
  ],
  simazo: [
    {
      link: "https://simazo.fibrazo.com.co",
      icon: "web",
      label: "simazo.fibrazo.com.co",
    },
  ],
  wasapi: [
    {
      link: "https://wasapi.io",
      icon: "web",
      label: "wasapi.io",
    },
  ],
  "wasapi-app": [
    {
      link: "https://apps.apple.com/us/app/wasapi/id6443781383",
      icon: "apple",
      label: "App Store",
    },
    {
      link: "https://play.google.com/store/apps/details?id=com.vinixcode.Wasapi",
      icon: "google",
      label: "Google Play",
    },
  ],
  "stars-crm": [
    {
      link: "https://customers.starsplastics.com/",
      icon: "web",
      label: "starsplastics.com",
    },
  ],
  "stars-app": [
    {
      link: "https://apps.apple.com/us/app/stars-gateway/id1572540209",
      icon: "apple",
      label: "App Store",
    },
    {
      link: "https://play.google.com/store/apps/details?id=com.vinixcode.STARS_Gateway",
      icon: "google",
      label: "Google Play",
    },
  ],
  "match-fit-app": [
    {
      link: "https://apps.apple.com/us/app/match-fit/id6464080703",
      icon: "apple",
      label: "App Store",
    },
  ],
  "metis-foundation": [
    {
      link: "https://grants.metisfoundationusa.org/",
      icon: "web",
      label: "metisfoundationusa.org",
    },
  ],
  "master-2000": [
    {
      link: "https://login.master2000.net/ingreso/index.php?A=Global&",
      icon: "web",
      label: "master2000.net",
    },
  ],
  "dominus-ingenieria": [
    {
      link: "https://dominus.iapropiada.com/",
      icon: "web",
      label: "iapropiada.com",
    },
  ],
};

/** Cifras derivadas de los datos (Hero, Skills, subtítulo de Proyectos). */
export const projectStats = {
  total: projects_es.length,
  storeApps: Object.values(projects_link).filter((links) =>
    links.some((link) => link.icon === "apple" || link.icon === "google")
  ).length,
};
