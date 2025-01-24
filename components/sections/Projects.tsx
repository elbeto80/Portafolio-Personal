"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { projects_es, projects_en, projects_link } from "@/data/Projects";

import { FaApple, FaGoogle, FaLink } from "react-icons/fa";

interface ProjectsData {
  name: string;
  title: string;
  description: string;
  technologies: string;
  image: string;
}

export default function Projects() {
  const { t, i18n } = useTranslation();

  const projects: ProjectsData[] =
    i18n.language == "es" ? projects_es : projects_en;

  return (
    <section id="projects" className="container mx-auto px-4 py-16 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">
          {t("projects.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {projects_link[
                    project.name as keyof typeof projects_link
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-1 ml-1"
                    >
                      <span className="text-black">
                        {link.icon == "apple" ? (
                          <FaApple className="w-6 h-6" />
                        ) : link.icon == "google" ? (
                          <FaGoogle className="w-6 h-6" />
                        ) : (
                          <FaLink className="w-6 h-6" />
                        )}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.split(",").map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-500/90 px-2 py-1 rounded-md text-sm"
                    >
                      <small className="text-xs text-white">{tech}</small>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
