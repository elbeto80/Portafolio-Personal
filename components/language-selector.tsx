"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language == "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="w-10 h-10 p-0 overflow-hidden"
    >
      {i18n.language == "es" ? (
        <Image
          src="https://flagcdn.com/es.svg"
          alt="Español"
          width={24}
          height={24}
          className="rounded-sm"
        />
      ) : (
        <Image
          src="https://flagcdn.com/us.svg"
          alt="English"
          width={24}
          height={24}
          className="rounded-sm"
        />
      )}
    </Button>
  );
}
