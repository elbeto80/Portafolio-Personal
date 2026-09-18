"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Plus } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Reveal, SectionHeading } from "@/components/reveal";
import { projects_es, projects_en, projects_link } from "@/data/Projects";

interface ProjectData {
  name: string;
  title: string;
  subtitle?: string;
  category: string;
  group: "saas" | "mobile" | "platform";
  featured?: boolean;
  problem: string;
  description: string;
  technologies: string;
  shot?: string;
  image: string;
}

type ProjectLink = { link: string; icon: string; label: string };

const FILTERS = ["all", "saas", "mobile", "platform"] as const;

/* La tarjeta CTA ocupa los huecos que deja la última fila de la rejilla
   (2 columnas en sm, 3 en xl) para que nunca quede sola ni descuadrada. */
const CTA_SPAN_SM = ["sm:col-span-2", "sm:col-span-1"];
const CTA_SPAN_XL = ["xl:col-span-3", "xl:col-span-2", "xl:col-span-1"];

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "apple") return <FaApple className="h-3.5 w-3.5" />;
  if (icon === "google") return <FaGooglePlay className="h-3.5 w-3.5" />;
  return <Globe className="h-3.5 w-3.5" />;
}

/** Mock abstracto para los proyectos que todavía no tienen captura real. */
function ProjectMock({ group }: { group: ProjectData["group"] }) {
  if (group === "mobile") {
    return (
      <div className="flex h-[150px] items-end justify-center gap-3 overflow-hidden bg-[radial-gradient(420px_180px_at_50%_130%,hsl(var(--azure)/0.16),hsl(var(--surface-sunken))_70%)] pt-6">
        <div className="h-[132px] w-[78px] rounded-t-xl border border-line-strong bg-surface-raised px-2 pt-2 transition-transform duration-500 ease-smooth group-hover:scale-[1.03]">
          <div className="mx-auto mb-2 h-1 w-6 rounded-sm bg-line-strong" />
          <div className="mb-1.5 h-3.5 rounded bg-surface-hover" />
          <div className="mb-1.5 h-2 w-4/5 rounded-sm bg-azure/40" />
          <div className="mb-1.5 ml-auto h-2 w-3/5 rounded-sm bg-line" />
          <div className="mb-1.5 h-2 w-[72%] rounded-sm bg-azure/25" />
          <div className="ml-auto h-2 w-1/2 rounded-sm bg-line" />
        </div>
        <div className="h-[112px] w-[78px] rounded-t-xl border border-line bg-surface px-2 pt-2 opacity-80 transition-transform duration-500 ease-smooth group-hover:scale-[1.03]">
          <div className="mx-auto mb-2 h-1 w-6 rounded-sm bg-line" />
          <div className="mb-1.5 h-2 rounded-sm bg-surface-hover" />
          <div className="mb-1.5 h-2 w-[70%] rounded-sm bg-surface-hover" />
          <div className="h-2 w-[85%] rounded-sm bg-surface-hover" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[150px] overflow-hidden bg-[radial-gradient(420px_200px_at_25%_-20%,hsl(var(--teal)/0.12),hsl(var(--surface-sunken))_70%)] p-[18px]">
      <div className="flex h-full overflow-hidden rounded-lg border border-line bg-surface transition-transform duration-500 ease-smooth group-hover:scale-[1.03]">
        <div className="flex w-[52px] flex-col gap-[7px] border-r border-line bg-surface-sunken px-2 py-2.5">
          <span className="h-[7px] rounded-sm bg-teal/40" />
          <span className="h-[7px] rounded-sm bg-line" />
          <span className="h-[7px] rounded-sm bg-line" />
          <span className="h-[7px] rounded-sm bg-line" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-2.5">
          <span className="h-2.5 w-[45%] rounded-sm bg-line-strong" />
          <div className="flex gap-2">
            <span className="h-[34px] flex-1 rounded-md border border-line bg-surface-hover" />
            <span className="h-[34px] flex-1 rounded-md border border-line bg-surface-hover" />
            <span className="h-[34px] flex-1 rounded-md border border-azure/30 bg-azure/10" />
          </div>
          <div className="flex items-end gap-1.5">
            <span className="h-3 flex-1 rounded-sm bg-line" />
            <span className="h-5 flex-1 rounded-sm bg-line-strong" />
            <span className="h-4 flex-1 rounded-sm bg-line" />
            <span className="h-6 flex-1 rounded-sm bg-azure/50" />
            <span className="h-3.5 flex-1 rounded-sm bg-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({
  name,
  compact = false,
}: {
  name: string;
  compact?: boolean;
}) {
  const links = (projects_link[name as keyof typeof projects_link] ??
    []) as ProjectLink[];

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.link}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-[7px] rounded-lg border border-line text-ink-muted transition-all duration-200 hover:border-line-strong hover:bg-surface-hover hover:text-ink ${
            compact ? "h-9 px-3 text-[12.5px]" : "h-11 px-[18px] text-sm"
          }`}
        >
          <LinkIcon icon={link.icon} />
          {link.label}
          {!compact ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const filterRef = useRef(filter);
  filterRef.current = filter;

  const projects = (
    i18n.language?.startsWith("en") ? projects_en : projects_es
  ) as ProjectData[];

  const visible = projects.filter(
    (project) => filter === "all" || project.group === filter
  );
  const featured = visible.find((project) => project.featured);
  const rest = visible.filter((project) => !project.featured);

  /* Los chips de Experiencia enlazan a #project-<name>: se quita el filtro
     para que la tarjeta exista y se desplaza hasta ella (esperando a que
     termine la animación de entrada si la rejilla cambió). */
  useEffect(() => {
    const focusProject = () => {
      if (!window.location.hash.startsWith("#project-")) return;
      const wasFiltered = filterRef.current !== "all";
      setFilter("all");
      window.setTimeout(
        () => {
          document
            .getElementById(window.location.hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        },
        wasFiltered ? 650 : 0
      );
    };
    focusProject();
    window.addEventListener("hashchange", focusProject);
    return () => window.removeEventListener("hashchange", focusProject);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-line scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(1000px_560px_at_74%_4%,#000_0%,transparent_76%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24 xl:px-[120px]">
        <SectionHeading
          index="03"
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle", { count: projects.length })}
          aside={
            <div
              role="group"
              aria-label={t("projects.eyebrow")}
              className="flex flex-wrap gap-2"
            >
              {FILTERS.map((option) => {
                const active = filter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={active}
                    className={`h-[38px] rounded-[9px] border px-4 text-[13px] font-medium transition-colors duration-200 ${
                      active
                        ? "border-line-strong bg-surface-raised text-ink"
                        : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {t(`projects.filters.${option}`)}
                    {option === "all" ? (
                      <span className="ml-1.5 text-ink-faint">
                        {projects.length}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Proyecto destacado */}
        <AnimatePresence mode="popLayout">
          {featured ? (
            <motion.article
              key={featured.name}
              id={`project-${featured.name}`}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="group mt-10 flex flex-col overflow-hidden rounded-[18px] border border-line-strong bg-gradient-to-br from-surface-raised to-surface lg:flex-row"
            >
              <div className="flex flex-col p-6 sm:p-9 lg:w-[600px] lg:shrink-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex h-6 items-center rounded-full border border-azure/30 bg-azure/10 px-2.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-azure">
                    {t("projects.featured")}
                  </span>
                  <span className="inline-flex h-6 items-center rounded-full border border-line-strong px-2.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-muted">
                    {featured.category}
                    {featured.subtitle ? ` · ${featured.subtitle}` : ""}
                  </span>
                </div>

                <h3 className="mt-[18px] font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                  {featured.title}
                </h3>

                <div className="mt-4 border-l-2 border-amber/50 pl-3.5">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-amber">
                    {t("projects.problem")}
                  </div>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink">
                    {featured.problem}
                  </p>
                </div>

                <p className="mt-[18px] text-[15px] leading-[1.65] text-ink-muted">
                  {featured.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-[7px]">
                  {featured.technologies.split(",").map((tech) => (
                    <li key={tech}>
                      <span className="tech-chip">{tech.trim()}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 lg:mt-auto lg:pt-6">
                  <ProjectLinks name={featured.name} />
                </div>
              </div>

              <div className="flex flex-1 items-center bg-surface-sunken p-6 sm:p-9 lg:pl-0">
                <div className="w-full overflow-hidden rounded-xl border border-line-strong bg-background shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                  <div className="flex h-[30px] items-center gap-1.5 border-b border-line bg-surface px-3">
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="ml-2.5 h-4 flex-1 rounded bg-surface-hover" />
                  </div>
                  {featured.shot ? (
                    <Image
                      src={featured.shot}
                      alt={featured.title}
                      width={678}
                      height={343}
                      className="block h-auto w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                    />
                  ) : (
                    <ProjectMock group={featured.group} />
                  )}
                </div>
              </div>
            </motion.article>
          ) : null}
        </AnimatePresence>

        {/* Rejilla */}
        <motion.div
          layout
          className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {rest.map((project, index) => (
              <motion.article
                key={project.name}
                id={`project-${project.name}`}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.2),
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_28px_60px_-34px_rgba(0,0,0,0.95)]"
              >
                <div className="border-b border-line">
                  {project.shot ? (
                    <Image
                      src={project.shot}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="block h-[150px] w-full object-cover object-top transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                    />
                  ) : (
                    <ProjectMock group={project.group} />
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-2.5">
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <span className="mt-0.5 inline-flex h-[22px] shrink-0 items-center rounded-full border border-line-strong px-2.5 font-mono text-[10px] uppercase tracking-[0.06em] text-ink-muted">
                      {project.category}
                    </span>
                  </div>

                  <div className="border-l-2 border-amber/40 pl-[11px]">
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-amber">
                      {t("projects.solves")}
                    </div>
                    <p className="mt-1 text-[13px] leading-[1.5] text-ink">
                      {project.problem}
                    </p>
                  </div>

                  <p className="text-[13.5px] leading-[1.6] text-ink-faint">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5">
                    {project.technologies.split(",").map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex h-[25px] items-center rounded-md border border-line bg-surface-sunken px-2.5 font-mono text-[11px] text-ink-muted">
                          {tech.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-line pt-3.5">
                    <ProjectLinks name={project.name} compact />
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Llamada final */}
            <motion.article
              key="cta"
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              className={`${CTA_SPAN_SM[rest.length % 2]} ${CTA_SPAN_XL[rest.length % 3]} flex flex-col items-start justify-center gap-3.5 rounded-2xl border border-dashed border-line-strong bg-surface/50 p-8 transition-colors duration-300 hover:bg-surface`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface text-azure">
                <Plus className="h-5 w-5" />
              </span>
              <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                {t("projects.cta.title")}
              </h3>
              <p className="text-sm leading-[1.6] text-ink-faint">
                {t("projects.cta.text")}
              </p>
              <a
                href="#contact"
                className="mt-1 inline-flex h-11 items-center gap-2.5 rounded-[10px] border border-line-strong bg-surface-raised px-[18px] text-sm font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5"
              >
                {t("projects.cta.button")}
                <ArrowRight className="h-[15px] w-[15px]" />
              </a>
            </motion.article>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
