"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import { useTranslation } from "react-i18next";

const navItems = ["about", "experience", "projects", "skills", "contact"];

export default function Header() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Alberto Alvarez</h1>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Button variant="outline" size="icon">
            <a href="/cv-alberto-alvarez.pdf" download>
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
