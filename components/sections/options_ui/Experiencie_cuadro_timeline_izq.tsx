"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { experience_es, experience_en } from "./data/Experience";

interface ExperienceData {
  company: string;
  title: string;
  period: string;
  description: string[];
}

export default function Experience() {
  const { t, i18n } = useTranslation();

  const experience: ExperienceData[] =
    i18n.language === "es" ? experience_es : experience_en;

  return (
    <section id="experience" className="container mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">
          {t("experience.title")}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-[7px] top-4 h-[calc(100%-2rem)] w-0.5 bg-border" />
          {experience.map((info: ExperienceData, key: number) => (
            <motion.div
              key={info.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.2 }}
              className="relative mb-6"
            >
              <div className="flex items-start gap-8">
                <div className="hidden md:block w-4 h-4 mt-2 rounded-full bg-orange-500 shrink-0" />
                <Card className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {info.company}
                      </p>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {info.period}
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-2">
                    {info.description.map(
                      (description: string, key: number) => (
                        <li
                          key={key}
                          className="text-sm text-muted-foreground ml-4"
                        >
                          {description}
                        </li>
                      )
                    )}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
