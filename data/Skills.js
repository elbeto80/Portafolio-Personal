import { projectStats } from "./Projects";

/**
 * `items`  → tecnologías con nivel (0-100). Se conservan todos los niveles
 *            del portafolio anterior; React Native, Linux, Docker, AWS y CI/CD
 *            se reagrupan en las categorías Mobile y Cloud & DevOps.
 * `extras` → tecnologías usadas en proyectos reales, sin nivel asignado.
 */
export const skills = {
  frontend: {
    icon: "monitor",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Vue.js", level: 85 },
      { name: "Nuxt.js", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Next.js", level: 70 },
    ],
    extras: [],
  },
  backend: {
    icon: "server",
    items: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 95 },
      { name: "REST API", level: 90 },
      { name: "Node.js", level: 60 },
      { name: "Express", level: 60 },
      { name: "Django", level: 50 },
    ],
    extras: [],
  },
  mobile: {
    icon: "smartphone",
    items: [{ name: "React Native", level: 85 }],
    extras: ["Expo", "React Native Paper", "Firebase"],
    highlight: { value: String(projectStats.storeApps), key: "stores" },
  },
  databases: {
    icon: "database",
    items: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQL Server", level: 65 },
      { name: "MongoDB", level: 40 },
    ],
    extras: ["Redis", "Firebase"],
  },
  cloud: {
    icon: "cloud",
    items: [
      { name: "Linux", level: 85 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 60 },
      { name: "AWS", level: 55 },
    ],
    extras: ["Laravel Reverb", "Pusher"],
  },
  tools: {
    icon: "wrench",
    items: [
      { name: "Git", level: 90 },
      { name: "JWT", level: 80 },
    ],
    extras: [
      "Scrum",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vuetify",
      "Bootstrap",
      "jQuery",
      "WhatsApp API",
      "Quickbooks",
    ],
  },
};

/** Capas de arquitectura mostradas en el Hero (el texto de cada capa vive en `hero.layerStack` del i18n). */
export const architecture = [
  {
    key: "frontend",
    label: "FRONTEND",
    tone: "azure",
  },
  {
    key: "api",
    label: "API",
    tone: "teal",
  },
  {
    key: "backend",
    label: "BACKEND",
    tone: "amber",
  },
  {
    key: "data",
    label: "DATA · CLOUD",
    tone: "neutral",
  },
];
