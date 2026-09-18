"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal, SectionHeading } from "@/components/reveal";
import { experience_es, experience_en } from "@/data/Experience";
import { projects_es, projects_en } from "@/data/Projects";

interface ExperienceData {
  company: string;
  title: string;
  period: string;
  from: string;
  to: string;
  current?: boolean;
  description: string[];
  technologies: string[];
  projects: string[];
}

export default function Experience() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const experience: ExperienceData[] =
    i18n.language?.startsWith("en") ? experience_en : experience_es;
  const projectTitles = new Map(
    (i18n.language?.startsWith("en") ? projects_en : projects_es).map(
      (project) => [project.name, project.title]
    )
  );

  const toggle = (index: number) =>
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-line scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(900px_620px_at_20%_6%,#000_0%,transparent_76%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24 xl:px-[120px]">
        <SectionHeading
          index="02"
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
          aside={
            <div className="flex overflow-hidden rounded-xl border border-line bg-surface">
              <div className="px-5 py-4 text-center sm:px-6">
                <div className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                  {experience.length}
                </div>
                <div className="mt-0.5 text-[11.5px] text-ink-faint">
                  {t("experience.companies")}
                </div>
              </div>
              <div className="w-px bg-line" />
              <div className="px-5 py-4 text-center sm:px-6">
                <div className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                  12<span className="text-azure">+</span>
                </div>
                <div className="mt-0.5 text-[11.5px] text-ink-faint">
                  {t("experience.yearsDev")}
                </div>
              </div>
              <div className="w-px bg-line" />
              <div className="px-5 py-4 text-center sm:px-6">
                <div className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                  20<span className="text-azure">+</span>
                </div>
                <div className="mt-0.5 text-[11.5px] text-ink-faint">
                  {t("experience.since")}
                </div>
              </div>
            </div>
          }
        />

        <div className="mt-10 border-t border-line pt-10">
          <ol className="flex flex-col">
            {experience.map((job, index) => {
              const isOpen = Boolean(open[index]);
              const isLast = index === experience.length - 1;

              return (
                <li key={job.company} className="flex items-stretch">
                  {/* Rail de periodo (desktop) */}
                  <div className="hidden w-[156px] shrink-0 pr-6 pt-5 text-right lg:block">
                    <div className="font-mono text-[12.5px] text-ink">
                      {job.from}
                    </div>
                    <div
                      className={`font-mono text-[12.5px] ${
                        job.current ? "text-azure" : "text-ink-faint"
                      }`}
                    >
                      {job.to}
                    </div>
                  </div>

                  {/* Espina */}
                  <div className="flex w-8 shrink-0 flex-col items-center lg:w-10">
                    <span
                      className={`mt-5 shrink-0 rounded-full ${
                        job.current
                          ? "h-[13px] w-[13px] bg-azure shadow-[0_0_0_4px_hsl(var(--azure)/0.16)]"
                          : "h-[11px] w-[11px] border-2 border-line-strong bg-background"
                      }`}
                    />
                    <span
                      className={`mt-1.5 w-px flex-1 ${
                        isLast
                          ? "bg-gradient-to-b from-line to-transparent"
                          : "bg-line"
                      }`}
                    />
                  </div>

                  {/* Tarjeta */}
                  <Reveal
                    delay={Math.min(index * 0.04, 0.2)}
                    className={`min-w-0 flex-1 ${isLast ? "" : "mb-4"}`}
                  >
                    <article
                      className={`overflow-hidden rounded-[14px] border transition-colors duration-300 ${
                        job.current
                          ? "border-line-strong bg-gradient-to-b from-surface-raised to-surface"
                          : "border-line bg-surface-sunken hover:border-line-strong"
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          onClick={() => toggle(index)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center gap-4 p-5 text-left transition-colors duration-200 hover:bg-surface-hover/50"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                                {job.company}
                              </span>
                              {job.current ? (
                                <span className="inline-flex h-[22px] items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-2.5 font-mono text-[10.5px] uppercase text-amber">
                                  <span className="h-[5px] w-[5px] rounded-full bg-amber" />
                                  {t("experience.current")}
                                </span>
                              ) : null}
                            </span>
                            <span className="mt-1.5 block text-sm text-ink-muted sm:text-[14.5px]">
                              {job.title}
                            </span>
                            <span className="mt-1.5 block font-mono text-[11px] text-ink-faint lg:hidden">
                              {job.period}
                            </span>
                          </span>

                          <span className="hidden shrink-0 font-mono text-[11px] text-ink-faint xl:block">
                            {job.technologies.slice(0, 3).join(" · ")}
                          </span>

                          <ChevronDown
                            className={`h-[18px] w-[18px] shrink-0 text-ink-faint transition-transform duration-300 ease-smooth ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.2, 0.7, 0.2, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <div className="mb-4 h-px bg-line" />

                              {job.period.includes(",") ? (
                                <p className="mb-3.5 font-mono text-[11.5px] text-ink-faint">
                                  {job.period}
                                </p>
                              ) : null}

                              <ul className="flex flex-col gap-2.5">
                                {job.description.map((line) => (
                                  <li
                                    key={line}
                                    className="flex gap-3 text-sm leading-[1.6] text-ink-muted sm:text-[14.5px]"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="pt-[3px] font-mono text-xs text-azure"
                                    >
                                      ▸
                                    </span>
                                    {line}
                                  </li>
                                ))}
                              </ul>

                              {job.projects.length > 0 ? (
                                <div className="mt-[18px] flex flex-wrap items-center gap-2.5">
                                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                                    {t("experience.projectsLabel")}
                                  </span>
                                  {job.projects.map((project) => (
                                    <a
                                      key={project}
                                      href={`#project-${project}`}
                                      className="inline-flex h-[27px] items-center rounded-md border border-line-strong px-2.5 text-xs text-ink transition-colors duration-200 hover:border-azure/50 hover:text-azure"
                                    >
                                      {projectTitles.get(project) ?? project}
                                    </a>
                                  ))}
                                </div>
                              ) : null}

                              <ul className="mt-3.5 flex flex-wrap gap-[7px]">
                                {job.technologies.map((tech) => (
                                  <li key={tech}>
                                    <span className="tech-chip">{tech}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
