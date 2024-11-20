"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillLevels = {
  React: 90,
  "Vue.js": 85,
  TypeScript: 88,
  "Next.js": 85,
  "Node.js": 87,
  Express: 85,
  NestJS: 80,
  Python: 75,
  PostgreSQL: 85,
  MongoDB: 82,
  Redis: 78,
  MySQL: 80,
  Git: 90,
  Docker: 85,
  AWS: 80,
  "CI/CD": 82,
};

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
          {["frontend", "backend", "databases", "tools"].map((category) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t(`skills.${category}.title`)}
              </h3>
              <div className="space-y-4">
                {t(`skills.${category}.items`)
                  .split(",")
                  .map((skill) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill}</span>
                        <span>
                          {skillLevels[skill as keyof typeof skillLevels]}%
                        </span>
                      </div>
                      <Progress
                        value={skillLevels[skill as keyof typeof skillLevels]}
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
