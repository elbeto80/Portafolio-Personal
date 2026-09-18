"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Download, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { socialLinks } from "@/data/social-links.js";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-line scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(900px_620px_at_24%_8%,#000_0%,transparent_76%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24 xl:px-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Retrato */}
          <Reveal className="mx-auto w-full max-w-[380px] shrink-0 lg:mx-0">
            <div className="rounded-[18px] border border-line-strong bg-surface p-3.5 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-xl bg-surface-sunken">
                <Image
                  src="/yo.png"
                  alt="Alberto Alvarez"
                  width={542}
                  height={618}
                  priority
                  className="h-[400px] w-full object-cover object-top"
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between px-1 pb-0.5">
                <span className="font-mono text-[11.5px] text-ink">
                  alberto_alvarez.png
                </span>
                <span className="inline-flex items-center gap-[7px] font-mono text-[11px] text-ink-faint">
                  <span className="h-[5px] w-[5px] rounded-full bg-amber" />
                  Medellín, CO
                </span>
              </div>
            </div>

            <div className="mt-[18px] rounded-xl border border-line bg-surface-sunken px-[18px] py-4 font-mono text-xs leading-[1.9]">
              <div className="text-ink-faint">
                <span className="text-teal">$</span> whoami
              </div>
              <div className="text-ink">alberto · senior full stack dev</div>
              <div className="mt-1.5 text-ink-faint">
                <span className="text-teal">$</span> uptime
              </div>
              <div className="text-ink">
                12+ {t("hero.stats.years")}{" "}
                <span className="inline-block h-3.5 w-[7px] animate-blink bg-azure align-[-2px]" />
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={0.06} className="min-w-0 flex-1">
            <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-faint">
              <span className="text-azure">01</span>
              <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
              {t("about.eyebrow")}
            </div>

            <p className="mt-5 font-display text-[clamp(1.25rem,3vw,1.5625rem)] font-medium tracking-[-0.02em] text-ink">
              {t("about.description1")}
            </p>

            <h2 className="mt-3.5 font-display text-[clamp(1.9rem,4.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              {t("about.title")}
            </h2>

            <p className="mt-6 max-w-[700px] text-[16.5px] leading-[1.72] text-ink-muted">
              {t("about.description2")}
            </p>

            <p className="mt-[18px] max-w-[700px] text-[16.5px] leading-[1.72] text-ink-muted">
              {t("about.description3")}
            </p>

            <dl className="mt-7 grid gap-3 sm:grid-cols-3">
              {(
                [
                  ["focusLabel", "focus"],
                  ["methodLabel", "method"],
                  ["scopeLabel", "scope"],
                ] as const
              ).map(([labelKey, valueKey]) => (
                <div
                  key={labelKey}
                  className="rounded-xl border border-line bg-surface px-[18px] py-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                    {t(`about.facts.${labelKey}`)}
                  </dt>
                  <dd className="mt-[7px] text-sm text-ink">
                    {t(`about.facts.${valueKey}`)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={socialLinks.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] items-center gap-2.5 rounded-[11px] border border-line-strong bg-surface px-[18px] text-[14.5px] font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover"
              >
                <Github className="h-[17px] w-[17px]" />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] items-center gap-2.5 rounded-[11px] border border-line-strong bg-surface px-[18px] text-[14.5px] font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover"
              >
                <Linkedin className="h-[17px] w-[17px]" />
                LinkedIn
              </a>
              <a
                href={socialLinks.downloadCV.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[46px] items-center gap-2.5 rounded-[11px] border border-azure/40 bg-azure/10 px-[18px] text-[14.5px] font-medium text-azure transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-azure/15"
              >
                <Download className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-y-0.5" />
                {t("about.socialButtons.downloadCV")}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
