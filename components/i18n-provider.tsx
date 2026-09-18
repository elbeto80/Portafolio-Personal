"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      meta: {
        title: "Alberto Alvarez — Senior Full Stack Developer",
        description:
          "Portafolio de Alberto Alvarez, Senior Full Stack Developer: más de 20 años en tecnología y 12 en desarrollo de aplicaciones web, apps móviles y sistemas backend escalables.",
      },
      common: {
        downloadCV: "Descargar CV",
        cv: "CV",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        toggleTheme: "Cambiar tema",
        toggleLanguage: "Cambiar idioma",
        skipToContent: "Saltar al contenido",
      },
      hero: {
        location: "Medellín, Colombia",
        timeframe: "2006 — Presente",
        role: "Senior Full Stack Developer",
        lead: "Diseño y construyo aplicaciones web y móviles, APIs y sistemas backend escalables, adaptados a las necesidades específicas de cada cliente. Más de 20 años en tecnología: 12 dedicados al desarrollo de software, 8 de ellos enfocados en web.",
        stackLabel: "Stack principal",
        ctaProjects: "Ver proyectos",
        ctaExperience: "Ver experiencia",
        ctaContact: "Contactarme",
        stats: {
          years: "años desarrollando software",
          projects: "proyectos entregados",
          apps: "apps publicadas en tiendas",
        },
        architecture: "Arquitectura de extremo a extremo",
        layers: "4 capas",
        layerStack: {
          frontend: "React · Next.js · Vue · Nuxt · TypeScript · React Native",
          api: "REST · JWT · Webhooks · Tiempo real",
          backend: "Laravel · PHP · Node.js · Express · Django",
          data: "PostgreSQL · MySQL · Redis · AWS · Docker",
        },
        trajectory: "Trayectoria",
        code: {
          focus: "Arquitectura",
          rest: "APIs REST",
          teams: "Scrum · metodologías ágiles",
          delivery: "análisis → producción",
        },
      },
      about: {
        eyebrow: "Sobre mí",
        title: "Desarrollador Full Stack Senior",
        description1: "¡Hola! Soy Alberto. Encantado de conocerte.",
        description2:
          "Soy desarrollador de software con más de 20 años en el área de tecnología, 12 de ellos en desarrollo de software y 8 en desarrollo web, trabajando en proyectos que van desde aplicaciones web hasta soluciones móviles, con un enfoque en crear sistemas escalables y adaptados a las necesidades específicas de cada cliente.",
        description3:
          "Apasionado por el aprendizaje continuo y la innovación tecnológica, disfruto transformar ideas en experiencias funcionales y eficientes. Resolver desafíos complejos es mi motivación, aplicando mis habilidades para desarrollar soluciones con impacto real.",
        facts: {
          focusLabel: "Enfoque",
          focus: "Sistemas escalables",
          methodLabel: "Método",
          method: "Scrum · equipos ágiles",
          scopeLabel: "Alcance",
          scope: "Web · Móvil · Backend",
        },
        socialButtons: {
          downloadCV: "Descargar CV",
        },
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Trayectoria profesional",
        subtitle:
          "De soporte técnico y bases de datos a arquitectura y desarrollo full stack. Abre una etapa para ver responsabilidades, proyectos y tecnologías.",
        current: "Actual",
        companies: "compañías",
        yearsDev: "años como dev",
        since: "años en tecnología",
        projectsLabel: "Proyectos",
      },
      projects: {
        eyebrow: "Proyectos",
        title: "Productos en producción",
        subtitle:
          "{{count}} plataformas y aplicaciones construidas de extremo a extremo: del análisis inicial al producto usado por clientes reales.",
        featured: "Proyecto destacado",
        problem: "El problema",
        solves: "Resuelve",
        filters: {
          all: "Todos",
          saas: "SaaS",
          mobile: "Móvil",
          platform: "Plataformas",
        },
        cta: {
          title: "¿Tienes un proyecto en mente?",
          text: "Construyo plataformas web, apps móviles y backends a medida, desde el análisis hasta producción.",
          button: "Hablemos",
        },
      },
      skills: {
        eyebrow: "Stack tecnológico",
        title: "Herramientas de trabajo",
        subtitle:
          "El stack con el que construyo producto, organizado por capa. El nivel es una autoevaluación basada en años y proyectos reales en producción.",
        levelLabel: "Nivel",
        extras: "En proyectos publicados",
        extrasTools: "UI, método e integraciones",
        stores: "apps publicadas en tiendas",
        note: "El nivel indica profundidad de uso en proyectos entregados, no una certificación.",
        frontend: { title: "Frontend" },
        backend: { title: "Backend" },
        mobile: { title: "Móvil" },
        databases: { title: "Bases de datos" },
        cloud: { title: "Cloud & DevOps" },
        tools: { title: "Herramientas" },
      },
      contact: {
        eyebrow: "Contacto",
        title: "¿Trabajamos juntos?",
        description:
          "¿Interesado en trabajar juntos? ¡Contáctame! Estoy abierto a oportunidades profesionales, proyectos y colaboración.",
        directMail: "O escríbeme directo a",
        form: {
          name: "Tu nombre",
          email: "Tu email",
          subject: "Asunto",
          message: "Tu mensaje",
          send: "Enviar mensaje",
          socialProfiles: "Perfiles sociales",
          location: "Medellín, Colombia",
          phone: "(+57) 317 855 52 09",
          timezone: "GMT-5",
          success: "Mensaje enviado",
          successMessage: "Tu mensaje ha sido enviado correctamente.",
          error: "Error",
          errorMessage:
            "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
          sending: "Enviando...",
        },
      },
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Stack",
        contact: "Contacto",
      },
      footer: {
        text: "Todos los derechos reservados.",
        backToTop: "Volver arriba",
        built: "Construido con Next.js, TypeScript y Tailwind CSS.",
      },
      theme: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: "Alberto Alvarez — Senior Full Stack Developer",
        description:
          "Portfolio of Alberto Alvarez, Senior Full Stack Developer: over 20 years in technology and 12 building web applications, mobile apps, and scalable backend systems.",
      },
      common: {
        downloadCV: "Download CV",
        cv: "CV",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        toggleTheme: "Toggle theme",
        toggleLanguage: "Toggle language",
        skipToContent: "Skip to content",
      },
      hero: {
        location: "Medellín, Colombia",
        timeframe: "2006 — Present",
        role: "Senior Full Stack Developer",
        lead: "I design and build web and mobile applications, APIs, and scalable backend systems tailored to the specific needs of each client. Over 20 years in technology: 12 of them in software development, 8 focused on the web.",
        stackLabel: "Core stack",
        ctaProjects: "View projects",
        ctaExperience: "View experience",
        ctaContact: "Get in touch",
        stats: {
          years: "years building software",
          projects: "projects delivered",
          apps: "apps published on app stores",
        },
        architecture: "End-to-end architecture",
        layers: "4 layers",
        layerStack: {
          frontend: "React · Next.js · Vue · Nuxt · TypeScript · React Native",
          api: "REST · JWT · Webhooks · Real time",
          backend: "Laravel · PHP · Node.js · Express · Django",
          data: "PostgreSQL · MySQL · Redis · AWS · Docker",
        },
        trajectory: "Track record",
        code: {
          focus: "Architecture",
          rest: "REST APIs",
          teams: "Scrum · agile methodologies",
          delivery: "analysis → production",
        },
      },
      about: {
        eyebrow: "About me",
        title: "Senior Full Stack Developer",
        description1: "Hello! I'm Alberto. Nice to meet you.",
        description2:
          "I'm a software developer with over 20 years in technology, 12 of them in software development and 8 in web development, working on projects ranging from web applications to mobile solutions, with a focus on creating scalable and tailored systems to meet the specific needs of each client.",
        description3:
          "Passionate about continuous learning and technological innovation, I enjoy transforming ideas into functional and efficient experiences. Solving complex challenges is my motivation, applying my skills to develop impactful solutions.",
        facts: {
          focusLabel: "Focus",
          focus: "Scalable systems",
          methodLabel: "Method",
          method: "Scrum · agile teams",
          scopeLabel: "Scope",
          scope: "Web · Mobile · Backend",
        },
        socialButtons: {
          downloadCV: "Download CV",
        },
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional track record",
        subtitle:
          "From technical support and databases to architecture and full stack development. Open a stage to see responsibilities, projects, and technologies.",
        current: "Current",
        companies: "companies",
        yearsDev: "years as a dev",
        since: "years in tech",
        projectsLabel: "Projects",
      },
      projects: {
        eyebrow: "Projects",
        title: "Products in production",
        subtitle:
          "{{count}} platforms and applications built end to end: from initial analysis to a product used by real customers.",
        featured: "Featured project",
        problem: "The problem",
        solves: "Solves",
        filters: {
          all: "All",
          saas: "SaaS",
          mobile: "Mobile",
          platform: "Platforms",
        },
        cta: {
          title: "Have a project in mind?",
          text: "I build custom web platforms, mobile apps, and backends, from analysis through to production.",
          button: "Let's talk",
        },
      },
      skills: {
        eyebrow: "Tech stack",
        title: "Tools of the trade",
        subtitle:
          "The stack I build products with, organized by layer. The level is a self-assessment based on years and real projects in production.",
        levelLabel: "Level",
        extras: "In published projects",
        extrasTools: "UI, method, and integrations",
        stores: "apps published on app stores",
        note: "The level reflects depth of use in delivered projects, not a certification.",
        frontend: { title: "Frontend" },
        backend: { title: "Backend" },
        mobile: { title: "Mobile" },
        databases: { title: "Databases" },
        cloud: { title: "Cloud & DevOps" },
        tools: { title: "Tools" },
      },
      contact: {
        eyebrow: "Contact",
        title: "Shall we work together?",
        description:
          "Interested in working together? Get in touch! I'm open to professional opportunities, projects, and collaboration.",
        directMail: "Or email me directly at",
        form: {
          name: "Your name",
          email: "Your email",
          subject: "Subject",
          message: "Your message",
          send: "Send message",
          socialProfiles: "Social profiles",
          location: "Medellín, Colombia",
          phone: "(+57) 317 855 52 09",
          timezone: "GMT-5",
          success: "Message sent",
          successMessage: "Your message has been sent successfully.",
          error: "Error",
          errorMessage:
            "There was an error sending the message. Please try again.",
          sending: "Sending...",
        },
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Stack",
        contact: "Contact",
      },
      footer: {
        text: "All rights reserved.",
        backToTop: "Back to top",
      },
      theme: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
  },
};

export const LANGUAGE_STORAGE_KEY = "lang";

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  supportedLngs: ["es", "en"],
  interpolation: {
    escapeValue: false,
  },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  /* El HTML estático se genera en español; en el cliente se aplica el idioma
     guardado (o el del navegador) y se mantiene <html lang> sincronizado. */
  useEffect(() => {
    const syncHtmlLang = (lng: string) => {
      document.documentElement.lang = lng;
      document.title = i18n.t("meta.title");
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", i18n.t("meta.description"));
    };
    i18n.on("languageChanged", syncHtmlLang);

    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {}
    const preferred =
      saved ?? (navigator.language?.startsWith("en") ? "en" : "es");
    if (preferred !== i18n.language) i18n.changeLanguage(preferred);

    return () => i18n.off("languageChanged", syncHtmlLang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
