"use client";

import { useTranslation } from "react-i18next";
import { LANGUAGE_STORAGE_KEY } from "@/components/i18n-provider";

const LANGS = ["es", "en"] as const;

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <div
      className="flex h-9 items-center rounded-lg border border-line bg-surface p-[3px]"
      role="group"
      aria-label={t("common.toggleLanguage")}
    >
      {LANGS.map((lang) => {
        const active = current === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => {
              i18n.changeLanguage(lang);
              try {
                localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
              } catch {}
            }}
            aria-pressed={active}
            className={`h-[26px] rounded-md px-2.5 font-mono text-[11px] font-medium uppercase transition-colors duration-200 ${
              active
                ? "bg-surface-raised text-ink"
                : "text-ink-faint hover:text-ink"
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
