"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import LanguageSelector from "@/components/language-selector";
import { useTranslation } from "react-i18next";

import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import ThemeSelector from "@/components/theme-selector";
import { socialLinks } from "@/data/social-links.js";

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
                  className="block w-full text-left px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {t(`nav.${item}`)}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
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
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t(`nav.${item}`)}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <LanguageSelector />

          <Button variant="ghost" size="icon" asChild>
            <a
              href={socialLinks.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href={socialLinks.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon">
            <a href={socialLinks.downloadCV.href} target="_blank">
              <Download className="h-5 w-5" />
            </a>
          </Button>

          <ThemeSelector />
        </div>
      </div>
    </motion.nav>
  );
}
