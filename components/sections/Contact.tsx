"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/components/sections/data/social-links.js";

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

        <div className="grid grid-cols-1 gap-8 mt-8 w-full md:w-[70%] mx-auto">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-sm font-medium mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-left text-sm font-medium mb-1"
                >
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-2 border rounded-md bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-sm font-medium mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border rounded-md bg-background"
                ></textarea>
              </div>
              <Button className="w-full bg-orange-600 text-white">
                <Mail className="h-4 w-4 mr-2" />
                {t("contact.form.send")}
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.form.contactInfo")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <a href="mailto:contact@albertoalvarez.dev">
                    contact@albertoalvarez.dev
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{t("contact.form.phone")}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{t("contact.form.location")}</span>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.form.socialProfiles")}
              </h3>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={socialLinks.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={socialLinks.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
