"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { socialLinks } from "@/data/social-links.js";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="container mx-auto px-4 pt-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 dark:bg-secondary/30 bg-secondary/70 rounded-2xl p-8 shadow-lg"
      >
        <div className="flex-1 text-center lg:text-right space-y-6">
          <motion.span
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="inline-block text-2xl font-bold bg-primary/10 text-primary px-4 py-2 rounded-full lg:hidden"
          >
            {"<Alberto Alvarez />"}
          </motion.span>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t("about.description1")}
          </p>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            {t("about.title")}
          </motion.h2>

          <p className="text-lg text-muted-foreground">
            {t("about.description2")}
          </p>

          <p className="text-lg text-muted-foreground">
            {t("about.description3")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-end pt-4">
            {Object.values(socialLinks).map((button) => {
              const Icon = button.icon;
              return (
                <motion.a
                  key={button.label}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  viewport={{ once: true }}
                  className={`group inline-flex items-center gap-2 px-4 py-2 
                             border border-orange-500/50
                             text-primary rounded-full
                          `}
                >
                  {button.label == "Descargar CV" ? (
                    <span className="group-hover:animate-bounce">
                      <Icon className="w-5 h-5" />
                    </span>
                  ) : (
                    <span className="group-hover:scale-125 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                  )}

                  <span className="font-medium relative">{button.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div
            className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary group 
                        transition-all duration-400 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 transition-all duration-400 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Alberto Alvarez"
              fill
              className="object-cover "
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
