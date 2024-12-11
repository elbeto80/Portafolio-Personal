import { Github, Linkedin, Download } from "lucide-react";

export const socialLinks = {
  github: {
    href: "https://github.com/elbeto80",
    icon: Github,
    label: "GitHub",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/alberto-alonso-alvarez-8416351a3/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  downloadCV: {
    href: "/CV_AlbertoAlvarez.pdf",
    icon: Download,
    label: "Descargar CV",
  },
};

// Configuración específica para la sección About
export const aboutSocialButtons = [
  {
    ...socialLinks.github,
    animation: "group-hover:scale-125 transition-transform",
  },
  {
    ...socialLinks.linkedin,
    animation: "group-hover:scale-125 transition-transform",
  },
  {
    ...socialLinks.downloadCV,
    animation: "group-hover:animate-bounce",
  },
];
