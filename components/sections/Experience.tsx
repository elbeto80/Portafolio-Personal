"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">
          {t("experience.title")}
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative mb-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="hidden md:block w-5 h-5 absolute left-1/2 -translate-x-1/2 rounded-full bg-orange-500 dark:bg-orange-700" />
                <Card
                  className={`w-full md:w-[calc(50%-2rem)] p-6 ${
                    i % 2 == 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold">
                    {t(`experience.jobs.${i}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`experience.jobs.${i}.period`)}
                  </p>
                  <p className="mt-4">
                    {t(`experience.jobs.${i}.description`)}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
