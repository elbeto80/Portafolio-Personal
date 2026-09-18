"use client";

import {
  Cloud,
  Database,
  Monitor,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal, SectionHeading } from "@/components/reveal";
import { skills } from "@/data/Skills";

const ICONS: Record<string, typeof Monitor> = {
  monitor: Monitor,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

const TONES: Record<string, string> = {
  frontend: "border-azure/30 bg-azure/10 text-azure",
  backend: "border-teal/30 bg-teal/10 text-teal",
  mobile: "border-amber/30 bg-amber/10 text-amber",
  databases: "border-azure/25 bg-azure/[0.08] text-azure",
  cloud: "border-line-strong bg-ink/5 text-ink-muted",
  tools: "border-teal/25 bg-teal/[0.08] text-teal",
};

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: string;
  items: SkillItem[];
  extras: string[];
  highlight?: { value: string; key: string };
}

export default function Skills() {
  const { t } = useTranslation();
  const categories = Object.entries(skills) as [string, SkillCategory][];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-line scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(900px_560px_at_50%_0%,#000_0%,transparent_74%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24 xl:px-[120px]">
        <SectionHeading
          index="04"
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
          aside={
            <div className="flex items-center gap-3 rounded-[10px] border border-line bg-surface px-4 py-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                {t("skills.levelLabel")}
              </span>
              <span className="h-1 w-24 rounded-full bg-gradient-to-r from-line to-azure" />
              <span className="font-mono text-[11px] text-ink-muted">
                0 → 100
              </span>
            </div>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map(([key, category], index) => {
            const Icon = ICONS[category.icon] ?? Monitor;

            return (
              <Reveal key={key} delay={Math.min(index * 0.05, 0.25)}>
                <section className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_26px_56px_-36px_rgba(0,0,0,0.95)]">
                  <header className="flex items-center gap-3 border-b border-line pb-[18px]">
                    <span
                      className={`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border ${
                        TONES[key] ?? TONES.cloud
                      }`}
                    >
                      <Icon className="h-[17px] w-[17px]" />
                    </span>
                    <h3 className="flex-1 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                      {t(`skills.${key}.title`)}
                    </h3>
                    <span className="font-mono text-[11px] text-ink-faint">
                      {String(category.items.length).padStart(2, "0")}
                    </span>
                  </header>

                  <ul className="flex flex-col gap-[15px] pt-[18px]">
                    {category.items.map((skill, skillIndex) => (
                      <li key={skill.name}>
                        <div className="mb-[7px] flex items-baseline justify-between gap-3">
                          <span className="text-[14.5px] font-medium text-ink">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11.5px] text-ink-faint">
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="h-1 overflow-hidden rounded-full bg-line"
                          role="meter"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={skill.name}
                        >
                          <div
                            className="h-1 origin-left rounded-full bg-azure animate-bar-grow"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 60}ms`,
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>

                  {category.extras.length > 0 ? (
                    <div className="mt-[18px]">
                      <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                        {key === "tools"
                          ? t("skills.extrasTools")
                          : t("skills.extras")}
                      </div>
                      <ul className="flex flex-wrap gap-[7px]">
                        {category.extras.map((extra) => (
                          <li key={extra}>
                            <span className="tech-chip">{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {category.highlight ? (
                    <div className="mt-[18px] flex items-center gap-3 rounded-[10px] border border-line bg-surface-sunken p-3.5">
                      <span className="font-display text-2xl font-semibold text-ink">
                        {category.highlight.value}
                      </span>
                      <span className="text-[12.5px] leading-snug text-ink-faint">
                        {t("skills.stores")}
                      </span>
                    </div>
                  ) : null}
                </section>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-7 font-mono text-[11px] text-ink-faint">
          <span aria-hidden="true">{"// "}</span>
          {t("skills.note")}
        </p>
      </div>
    </section>
  );
}
