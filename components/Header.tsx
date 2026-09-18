"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/language-selector";
import ThemeSelector from "@/components/theme-selector";
import { socialLinks } from "@/data/social-links.js";

const NAV_ITEMS = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  /* Sección activa mientras se hace scroll */
  useEffect(() => {
    const sections = NAV_ITEMS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Bloquea el scroll del body con el menú móvil abierto */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-6 px-5 md:h-[72px] md:px-10 xl:px-[120px]">
        {/* Marca */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex shrink-0 items-center gap-2.5 text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-line-strong bg-surface-raised font-mono text-xs font-bold text-azure">
            AA
          </span>
          <span className="flex flex-col leading-[1.15]">
            <span className="font-display text-[15px] font-semibold tracking-[-0.01em]">
              Alberto Alvarez
            </span>
            <span className="hidden font-mono text-[10.5px] tracking-[0.04em] text-ink-faint sm:block">
              senior full stack dev
            </span>
          </span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item)}
              aria-current={active === item ? "true" : undefined}
              className={`group relative py-1 text-sm font-medium transition-colors duration-200 ${
                active === item ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {t(`nav.${item}`)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-azure transition-all duration-300 ease-smooth ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1.5 lg:flex-none">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>

          <ThemeSelector />

          <a
            href={socialLinks.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-11 w-11 items-center justify-center rounded-[10px] border border-transparent text-ink-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-raised hover:text-ink sm:flex"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>

          <a
            href={socialLinks.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-11 w-11 items-center justify-center rounded-[10px] border border-transparent text-ink-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-raised hover:text-ink sm:flex"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>

          <a
            href={socialLinks.downloadCV.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-4 text-[13.5px] font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover md:inline-flex"
          >
            <Download className="h-[15px] w-[15px]" />
            <span className="hidden xl:inline">{t("common.downloadCV")}</span>
            <span className="xl:hidden">{t("common.cv")}</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t("common.closeMenu") : t("common.openMenu")}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-surface text-ink-muted transition-colors duration-200 hover:text-ink lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-line bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-5 py-3 md:px-10">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 border-b border-line py-4 text-left text-[15px] font-medium text-ink-muted transition-colors duration-200 last:border-b-0 hover:text-ink"
                >
                  <span className="font-mono text-[11px] text-ink-faint">
                    0{index + 1}
                  </span>
                  {t(`nav.${item}`)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 border-t border-line px-5 py-4 md:px-10">
              <div className="sm:hidden">
                <LanguageSelector />
              </div>
              <a
                href={socialLinks.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-surface text-ink-muted sm:hidden"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={socialLinks.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-surface text-ink-muted sm:hidden"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={socialLinks.downloadCV.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-4 text-[13.5px] font-medium text-ink md:hidden"
              >
                <Download className="h-[15px] w-[15px]" />
                {t("common.downloadCV")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
