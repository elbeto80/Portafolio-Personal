"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      about: {
        title: "Desarrollador Full Stack",
        description:
          "Con 8 años de experiencia en el desarrollo de aplicaciones web y móviles. Especializado en crear soluciones escalables y mantenibles utilizando las últimas tecnologías.",
      },
      experience: {
        title: "Experiencia",
        jobs: {
          "1": {
            title: "Senior Full Stack Developer",
            period: "2020 - Presente",
            description:
              "Lideré equipos de desarrollo y arquitectura de soluciones empresariales.",
          },
          "2": {
            title: "Full Stack Developer",
            period: "2017 - 2020",
            description: "Desarrollo de aplicaciones web y APIs RESTful.",
          },
          "3": {
            title: "Frontend Developer",
            period: "2015 - 2017",
            description:
              "Desarrollo de interfaces de usuario y experiencias interactivas.",
          },
        },
      },
      projects: {
        title: "Proyectos",
        list: {
          "1": {
            title: "E-commerce Platform",
            description:
              "Plataforma de comercio electrónico con más de 100,000 usuarios activos.",
            technologies: "React,Node.js,PostgreSQL",
          },
          "2": {
            title: "CRM System",
            description:
              "Sistema de gestión de relaciones con clientes para empresas.",
            technologies: "Vue.js,Express,MongoDB",
          },
          "3": {
            title: "Mobile App",
            description:
              "Aplicación móvil para gestión de tareas y productividad.",
            technologies: "React Native,Firebase",
          },
        },
      },
      skills: {
        title: "Habilidades",
        frontend: {
          title: "Frontend",
          items: "React,Vue.js,TypeScript,Next.js",
        },
        backend: {
          title: "Backend",
          items: "Node.js,Express,NestJS,Python",
        },
        databases: {
          title: "Bases de Datos",
          items: "PostgreSQL,MongoDB,Redis,MySQL",
        },
        tools: {
          title: "Herramientas",
          items: "Git,Docker,AWS,CI/CD",
        },
      },
      contact: {
        title: "Contacto",
        description: "¿Interesado en trabajar juntos? ¡Contáctame!",
      },
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
      },
      footer: {
        text: "Todos los derechos reservados.",
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
      about: {
        title: "Full Stack Developer",
        description:
          "With 8 years of experience in web and mobile application development. Specialized in creating scalable and maintainable solutions using the latest technologies.",
      },
      experience: {
        title: "Experience",
        jobs: {
          "1": {
            title: "Senior Full Stack Developer",
            period: "2020 - Present",
            description:
              "Led development teams and enterprise solution architecture.",
          },
          "2": {
            title: "Full Stack Developer",
            period: "2017 - 2020",
            description: "Development of web applications and RESTful APIs.",
          },
          "3": {
            title: "Frontend Developer",
            period: "2015 - 2017",
            description:
              "Development of user interfaces and interactive experiences.",
          },
        },
      },
      projects: {
        title: "Projects",
        list: {
          "1": {
            title: "E-commerce Platform",
            description: "E-commerce platform with over 100,000 active users.",
            technologies: "React,Node.js,PostgreSQL",
          },
          "2": {
            title: "CRM System",
            description:
              "Customer relationship management system for businesses.",
            technologies: "Vue.js,Express,MongoDB",
          },
          "3": {
            title: "Mobile App",
            description:
              "Mobile application for task management and productivity.",
            technologies: "React Native,Firebase",
          },
        },
      },
      skills: {
        title: "Skills",
        frontend: {
          title: "Frontend",
          items: "React,Vue.js,TypeScript,Next.js",
        },
        backend: {
          title: "Backend",
          items: "Node.js,Express,NestJS,Python",
        },
        databases: {
          title: "Databases",
          items: "PostgreSQL,MongoDB,Redis,MySQL",
        },
        tools: {
          title: "Tools",
          items: "Git,Docker,AWS,CI/CD",
        },
      },
      contact: {
        title: "Contact",
        description: "Interested in working together? Get in touch!",
      },
      nav: {
        about: "About",
        experience: "Experiencie",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
      footer: {
        text: "All rights reserved.",
      },
      theme: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
