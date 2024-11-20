"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

 const year = () => {
    var  d = new  Date();
    var  n = d.getFullYear();
    return  n;
  }

  return (
    <section id="contact" className="mx-auto py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <span>© { year() } Alberto Alvarez. {t("footer.text")}</span>
      </motion.div>
    </section>
  );
}