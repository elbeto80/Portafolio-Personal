"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container mx-auto px-4 py-16 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl font-bold">{t("contact.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("contact.description")}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://linkedin.com/in/alberto-alvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/alberto-alvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:contact@alberto-alvarez.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
