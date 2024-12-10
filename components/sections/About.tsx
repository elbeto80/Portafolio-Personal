"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { aboutSocialButtons } from "@/components/sections/data/social-links.js";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="container mx-auto px-4 pt-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-12 bg-secondary/30 rounded-2xl p-8 shadow-lg"
      >
        <div className="flex-1 text-center md:text-right space-y-6">
          <motion.span
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="inline-block text-2xl font-bold bg-primary/10 text-primary px-4 py-2 rounded-full md:hidden"
          >
            {"<Alberto Alvarez />"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            {t("about.title")}
          </motion.h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t("about.description1")}
          </p>

          <p className="text-lg text-muted-foreground">
            {t("about.description2")}
          </p>

          <p className="text-lg text-muted-foreground">
            {t("about.description3")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end pt-4">
            {aboutSocialButtons.map((button) => {
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
                  <span className={`${button.animation}`}>
                    <Icon className="w-5 h-5" />
                  </span>
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
            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary group 
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-300 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Alberto Alvarez"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
