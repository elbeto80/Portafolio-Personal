"use client";

import { useTranslation } from "react-i18next";

export default function SkipLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-azure focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
    >
      {t("common.skipToContent")}
    </a>
  );
}
