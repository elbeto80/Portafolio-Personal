"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/Skills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">{t("skills.title")}</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {Object.keys(skills).map((category) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t(`skills.${category}.title`)}
              </h3>
              <div className="space-y-4">
                {skills[category as keyof typeof skills].map((skill: any) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <Progress
                      value={skill.level}
                      className="bg-gray-200 dark:bg-gray-700"
                      progressClassName="bg-gradient-to-r from-orange-600 to-orange-300"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
