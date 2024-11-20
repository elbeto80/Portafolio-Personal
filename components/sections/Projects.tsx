"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const projectImages = {
  1: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  3: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  4: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
};

export default function Projects() {
  const { t } = useTranslation();

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
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={projectImages[i as keyof typeof projectImages]}
                  alt={t(`projects.list.${i}.title`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {t(`projects.list.${i}.title`)}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {t(`projects.list.${i}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t(`projects.list.${i}.technologies`)
                    .split(",")
                    .map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
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
