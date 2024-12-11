"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { projects_es, projects_en } from "@/data/Projects";

interface ProjectsData {
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
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
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
