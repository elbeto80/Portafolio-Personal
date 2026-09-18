"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Entrada suave al hacer scroll: fade + desplazamiento vertical corto.
 * Se dispara una sola vez y respeta prefers-reduced-motion (framer-motion
 * lee la preferencia del sistema a través de `useReducedMotion` interno).
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  aside?: ReactNode;
  centered?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  aside,
  centered = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={
          centered
            ? "flex flex-col items-center text-center"
            : "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        }
      >
        <div className={centered ? "max-w-2xl" : "max-w-3xl"}>
          <div
            className={`flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-faint ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="text-azure">{index}</span>
            <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
            {eyebrow}
          </div>

          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.4vw,2.875rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            {title}
          </h2>

          {subtitle ? (
            <p
              className={`mt-3.5 text-base leading-relaxed text-ink-muted ${
                centered ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </Reveal>
  );
}
