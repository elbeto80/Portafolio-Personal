"use client";

import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = ["about", "experience", "projects", "skills"] as const;

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-surface-sunken/70">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 md:px-10 lg:flex-row lg:items-center lg:gap-6 xl:px-[120px]">
        <div className="min-w-0">
          <p className="font-mono text-[12.5px] text-ink-faint">
            © {year} Alberto Alvarez. {t("footer.text")}
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint/70">
            {t("footer.built")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:ml-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item)}
              className="text-[13.5px] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("footer.backToTop")}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-line-strong bg-surface text-ink-muted transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:text-ink"
        >
          <ArrowUp className="h-[17px] w-[17px]" />
        </button>
      </div>
    </footer>
  );
}
