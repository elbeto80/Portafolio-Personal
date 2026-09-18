"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Code2,
  Database,
  Mail,
  Monitor,
  Network,
  Server,
} from "lucide-react";
import { architecture } from "@/data/Skills";
import { projectStats } from "@/data/Projects";

const CORE_STACK = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker",
];

const COMPANIES = [
  "Fibrazo",
  "Vinix Code",
  "GMA Digital",
  "Ingeniería Apropiada",
  "Múscari Internacional",
  "SIBO Avance",
  "Alfranca",
];

const LAYER_ICONS: Record<string, typeof Monitor> = {
  frontend: Monitor,
  api: Network,
  backend: Server,
  data: Database,
};

const LAYER_TONES: Record<string, string> = {
  azure: "border-azure/30 bg-azure/10 text-azure",
  teal: "border-teal/30 bg-teal/10 text-teal",
  amber: "border-amber/30 bg-amber/10 text-amber",
  neutral: "border-line-strong bg-ink/5 text-ink-muted",
};

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-line pt-[68px] md:pt-[72px]"
    >
      {/* Retícula y resplandores */}
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(1100px_760px_at_78%_12%,#000_0%,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-72 h-[700px] w-[900px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--azure)/var(--glow-azure)),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-80 h-[560px] w-[620px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--amber)/0.07),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20 xl:px-[120px]">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-[72px]">
          {/* ── Columna izquierda ── */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.06 }}
            className="min-w-0 flex-1"
          >
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-flex h-8 items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_0_3px_hsl(var(--amber)/0.16)]" />
              <span className="font-mono text-[11.5px] text-ink">
                {t("hero.location")}
              </span>
              <span className="h-3 w-px bg-line-strong" />
              <span className="font-mono text-[11.5px] text-ink-faint">
                {t("hero.timeframe")}
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-6 font-display text-[clamp(2.6rem,7.2vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
            >
              Alberto Alvarez
            </motion.h1>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-3.5 flex items-center gap-3.5"
            >
              <span className="h-px w-8 shrink-0 bg-azure" />
              <span className="font-display text-[clamp(1.15rem,3.2vw,1.7rem)] font-medium tracking-[-0.015em] text-azure">
                {t("hero.role")}
              </span>
            </motion.div>

            <motion.p
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-6 max-w-[546px] text-[17px] leading-[1.68] text-ink-muted"
            >
              {t("hero.lead")}
            </motion.p>

            {/* Stack principal */}
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-8"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-faint">
                {t("hero.stackLabel")}
              </div>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {CORE_STACK.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex h-[30px] items-center rounded-lg border border-line bg-surface px-3 font-mono text-xs text-ink transition-colors duration-200 hover:border-line-strong hover:bg-surface-hover">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Acciones */}
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex h-[50px] items-center gap-2.5 rounded-[11px] bg-azure px-6 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_28px_-12px_hsl(var(--azure)/0.7)] transition-transform duration-200 ease-smooth hover:-translate-y-0.5"
              >
                {t("hero.ctaProjects")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex h-[50px] items-center rounded-[11px] border border-line-strong bg-surface px-5 text-[15px] font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover"
              >
                {t("hero.ctaExperience")}
              </a>
              <a
                href="#contact"
                className="inline-flex h-[50px] items-center gap-2.5 rounded-[11px] border border-transparent px-5 text-[15px] font-medium text-ink-muted transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:text-ink"
              >
                <Mail className="h-4 w-4" />
                {t("hero.ctaContact")}
              </a>
            </motion.div>

            {/* Métricas */}
            <motion.dl
              variants={rise}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-11 flex border-t border-line pt-6"
            >
              <div className="flex-1 pr-4">
                <dt className="sr-only">{t("hero.stats.years")}</dt>
                <dd>
                  <span className="font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.02em] text-ink">
                    12<span className="text-azure">+</span>
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-ink-faint">
                    {t("hero.stats.years")}
                  </span>
                </dd>
              </div>
              <div className="w-px bg-line" />
              <div className="flex-1 px-4">
                <dt className="sr-only">{t("hero.stats.projects")}</dt>
                <dd>
                  <span className="font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.02em] text-ink">
                    {projectStats.total}
                    <span className="text-azure">+</span>
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-ink-faint">
                    {t("hero.stats.projects")}
                  </span>
                </dd>
              </div>
              <div className="w-px bg-line" />
              <div className="flex-1 pl-4">
                <dt className="sr-only">{t("hero.stats.apps")}</dt>
                <dd>
                  <span className="font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.02em] text-ink">
                    {projectStats.storeApps}
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-ink-faint">
                    {t("hero.stats.apps")}
                  </span>
                </dd>
              </div>
            </motion.dl>
          </motion.div>

          {/* ── Composición abstracta ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="w-full shrink-0 lg:w-[552px]"
            aria-hidden="true"
          >
            {/* Tarjeta de editor */}
            <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex h-[42px] items-center gap-3.5 border-b border-line bg-surface-sunken px-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                </div>
                <div className="flex h-[42px] items-center gap-2 border-b-2 border-azure px-3 font-mono text-[11.5px] text-ink">
                  <Code2 className="h-3 w-3 text-teal" />
                  alberto.config.ts
                </div>
                <span className="ml-auto font-mono text-[10.5px] text-ink-faint">
                  TypeScript
                </span>
              </div>

              <div className="overflow-x-auto px-5 pb-5 pt-4 font-mono text-[11.5px] leading-[1.85] sm:text-[12.5px]">
                {[
                  <>
                    <span className="text-code-keyword">import</span>{" "}
                    <span className="text-ink">{"{ Engineer }"}</span>{" "}
                    <span className="text-code-keyword">from</span>{" "}
                    <span className="text-code-string">
                      &quot;@/core/engineer&quot;
                    </span>
                    <span className="text-code-punct">;</span>
                  </>,
                  <>&nbsp;</>,
                  <>
                    <span className="text-code-keyword">export const</span>{" "}
                    <span className="text-ink">alberto</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-type">Engineer</span>{" "}
                    <span className="text-code-punct">= {"{"}</span>
                  </>,
                  <>
                    {"  "}
                    <span className="text-ink">role</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">
                      &quot;Senior Full Stack Developer&quot;
                    </span>
                    <span className="text-code-punct">,</span>
                  </>,
                  <>
                    {"  "}
                    <span className="text-ink">experience</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-punct">{"{"}</span>{" "}
                    <span className="text-ink">tech</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">&quot;20+&quot;</span>
                    <span className="text-code-punct">,</span>{" "}
                    <span className="text-ink">dev</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">&quot;12+&quot;</span>
                    <span className="text-code-punct">,</span>{" "}
                    <span className="text-ink">web</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">&quot;8&quot;</span>{" "}
                    <span className="text-code-punct">{"},"}</span>
                  </>,
                  <>
                    {"  "}
                    <span className="text-ink">focus</span>
                    <span className="text-code-punct">: [</span>
                    <span className="text-code-string">
                      &quot;{t("hero.code.focus")}&quot;
                    </span>
                    <span className="text-code-punct">,</span>{" "}
                    <span className="text-code-string">
                      &quot;{t("hero.code.rest")}&quot;
                    </span>
                    <span className="text-code-punct">,</span>{" "}
                    <span className="text-code-string">&quot;Mobile&quot;</span>
                    <span className="text-code-punct">],</span>
                  </>,
                  <>
                    {"  "}
                    <span className="text-ink">teams</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">
                      &quot;{t("hero.code.teams")}&quot;
                    </span>
                    <span className="text-code-punct">,</span>
                  </>,
                  <>
                    {"  "}
                    <span className="text-ink">delivery</span>
                    <span className="text-code-punct">:</span>{" "}
                    <span className="text-code-string">
                      &quot;{t("hero.code.delivery")}&quot;
                    </span>
                    <span className="text-code-punct">,</span>
                  </>,
                  <>
                    <span className="text-code-punct">{"};"}</span>{" "}
                    <span className="inline-block h-[13px] w-2 animate-blink bg-azure align-[-2px]" />
                  </>,
                ].map((line, index) => (
                  <div key={index} className="flex whitespace-pre">
                    <span className="w-6 shrink-0 select-none text-ink-faint/60">
                      {index + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capas de arquitectura */}
            <div className="mt-5 rounded-[14px] border border-line bg-surface/60 p-4 backdrop-blur-sm sm:p-[18px]">
              <div className="mb-3.5 flex items-center justify-between gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-faint">
                  {t("hero.architecture")}
                </span>
                <span className="font-mono text-[10.5px] text-ink-faint/70">
                  {t("hero.layers")}
                </span>
              </div>

              <div className="flex flex-col">
                {architecture.map((layer, index) => {
                  const Icon = LAYER_ICONS[layer.key] ?? Monitor;
                  return (
                    <div key={layer.key}>
                      <div className="group flex items-center gap-3.5 rounded-[10px] border border-line bg-surface p-3 transition-all duration-300 ease-smooth hover:translate-x-1 hover:border-line-strong hover:bg-surface-hover">
                        <span
                          className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg border ${
                            LAYER_TONES[layer.tone] ?? LAYER_TONES.neutral
                          }`}
                        >
                          <Icon className="h-[15px] w-[15px]" />
                        </span>
                        <span className="w-[86px] shrink-0 font-mono text-[10.5px] tracking-[0.06em] text-ink">
                          {layer.label}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[12.5px] text-ink-faint">
                          {t(`hero.layerStack.${layer.key}`)}
                        </span>
                      </div>
                      {index < architecture.length - 1 ? (
                        <div className="ml-[29px] h-3.5 w-px bg-line-strong" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tira de trayectoria */}
      <div className="relative border-t border-line bg-surface-sunken/70">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 md:px-10 lg:flex-row lg:items-center lg:gap-7 lg:py-0 xl:px-[120px]">
          <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-faint lg:py-8">
            {t("hero.trajectory")}
          </span>
          <span className="hidden h-5 w-px bg-line lg:block" />
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:flex-1 lg:justify-between">
            {COMPANIES.map((company, index) => (
              <li
                key={company}
                className={`font-display text-[13.5px] font-medium lg:text-[15px] ${
                  index === 0 ? "text-ink" : "text-ink-faint"
                }`}
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
