"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { experience_es, experience_en } from "./../data/Experience";

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

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          {experience.map((info: ExperienceData, key: number) => (
            <motion.div
              key={info.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.2 }}
              className="relative mb-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="hidden md:block w-5 h-5 absolute left-1/2 -translate-x-1/2 rounded-full bg-orange-500" />
                <Card
                  className={`w-full md:w-[calc(50%-2rem)] p-6 ${
                    key % 2 != 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <p className="text-sm text-muted-foreground font-semibold">
                    {info.company}
                  </p>

                  <h3 className="text-xl font-semibold">{info.title}</h3>

                  <p className="text-sm text-muted-foreground">{info.period}</p>

                  <ul className="mt-4 list-disc list-inside space-y-2">
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
