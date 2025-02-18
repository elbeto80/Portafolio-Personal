"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      about: {
        title: "Desarrollador Full Stack",
        description1: "¡Hola! Soy Alberto. Encantado de conocerte.",
        description2:
          "Soy desarrollador de software con más de 10 años de experiencia, incluidos 7 años en desarrollo web, trabajando en proyectos que van desde aplicaciones web hasta soluciones móviles, con un enfoque en crear sistemas escalables y adaptados a las necesidades específicas de cada cliente.",
        description3:
          "Apasionado por el aprendizaje continuo y la innovación tecnológica, disfruto transformar ideas en experiencias funcionales y eficientes. Resolver desafíos complejos es mi motivación, aplicando mis habilidades para desarrollar soluciones con impacto real.",
        socialButtons: {
          downloadCV: "Descargar CV",
        },
      },
      experience: {
        title: "Experiencia",
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
          "4": {
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
        form: {
          name: "Tu Nombre",
          email: "Tu Email",
          subject: "Asunto",
          message: "Tu Mensaje",
          send: "Enviar Mensaje",
          contactInfo: "Información de Contacto",
          socialProfiles: "Perfiles Sociales",
          location: "Medellín, Colombia",
          phone: "(+57) 317 855 52 09",

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
        description1: "Hello! I'm Alberto. Nice to meet you.",
        description2:
          "I'm a software developer with over 10 years of experience, including 7 years in web development, working on projects ranging from web applications to mobile solutions, with a focus on creating scalable and tailored systems to meet the specific needs of each client.",
        description3:
          "Passionate about continuous learning and technological innovation, I enjoy transforming ideas into functional and efficient experiences. Solving complex challenges is my motivation, applying my skills to develop impactful solutions.",
        socialButtons: {
          downloadCV: "Download CV",
        },
      },
      experience: {
        title: "Experience",
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
          "4": {
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
        form: {
          name: "Your Name",
          email: "Your Email",
          subject: "Subject",
          message: "Your Message",
          send: "Send Message",
          contactInfo: "Contact Information",
          socialProfiles: "Social Profiles",
          location: "Medellín, Colombia",
          phone: "(+57) 317 855 52 09",

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
