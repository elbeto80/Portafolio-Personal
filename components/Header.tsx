"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import { useTranslation } from "react-i18next";

import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

const navItems = ["about", "experience", "projects", "skills", "contact"];

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold hidden md:block">
          {"<Alberto Alvarez />"}
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b md:hidden">
            <div className="container py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </div>
        )}
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
        <div className="flex items-center gap-1">
          <LanguageSelector />

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/alberto-alvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/alberto-alvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>

          <Button variant="ghost" size="icon">
            <a href="/cv-alberto-alvarez.pdf" download>
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
