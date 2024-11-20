"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="container mx-auto px-4 pt-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-right space-y-4"
        >
          <span className="text-xl font-bold md:hidden">
            {"<Alberto Alvarez />"}
          </span>
          <h2 className="text-4xl font-bold">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Alberto Alvarez"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
