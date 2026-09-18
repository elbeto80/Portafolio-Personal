"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Reveal, SectionHeading } from "@/components/reveal";
import { socialLinks } from "@/data/social-links.js";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "info@albertoalvarez.dev";
const PHONE_HREF = "tel:+573178555209";

/* Se inyectan en build (ver .env.example); en Vercel se definen en
   Settings → Environment Variables. */
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const FIELD_CLASS =
  "w-full rounded-[10px] border border-line bg-surface-sunken px-3.5 text-[14.5px] text-ink transition-colors duration-200 placeholder:text-ink-faint hover:border-line-strong focus:border-azure focus:bg-surface focus:outline-none focus:ring-[3px] focus:ring-azure/15";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  /* Campo trampa: invisible para personas; los bots suelen rellenarlo. */
  const [honeypot, setHoneypot] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!honeypot) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          EMAILJS_PUBLIC_KEY
        );
      }

      toast({
        title: t("contact.form.success"),
        description: t("contact.form.successMessage"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("contact.form.error"),
        description: t("contact.form.errorMessage"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20">
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(900px_560px_at_50%_0%,#000_0%,transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 bottom-24 h-[620px] w-[760px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--azure)/var(--glow-azure)),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24 xl:px-[120px]">
        <SectionHeading
          index="05"
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.description")}
          centered
        />

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {/* Información */}
          <Reveal className="flex w-full flex-col gap-4 lg:w-[420px] lg:shrink-0">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface-sunken">
              <div className="flex h-[38px] items-center gap-2 border-b border-line bg-surface px-3.5">
                <span className="h-2 w-2 rounded-full bg-line-strong" />
                <span className="h-2 w-2 rounded-full bg-line-strong" />
                <span className="h-2 w-2 rounded-full bg-line-strong" />
                <span className="ml-2 font-mono text-[11px] text-ink-faint">
                  contact — info
                </span>
              </div>

              <div className="p-5 font-mono text-[13px] leading-[2.05]">
                <div className="text-ink-faint">
                  <span className="text-teal">$</span> contact --info
                </div>

                <dl className="mt-2.5">
                  <div className="flex gap-3">
                    <dt className="w-[78px] shrink-0 text-ink-faint">email</dt>
                    <dd className="min-w-0">
                      <a
                        href={`mailto:${EMAIL}`}
                        className="break-all text-amber transition-colors duration-200 hover:text-ink"
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-[78px] shrink-0 text-ink-faint">phone</dt>
                    <dd>
                      <a
                        href={PHONE_HREF}
                        className="text-amber transition-colors duration-200 hover:text-ink"
                      >
                        {t("contact.form.phone")}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-[78px] shrink-0 text-ink-faint">
                      location
                    </dt>
                    <dd className="text-ink">{t("contact.form.location")}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-[78px] shrink-0 text-ink-faint">
                      timezone
                    </dt>
                    <dd className="text-ink">{t("contact.form.timezone")}</dd>
                  </div>
                </dl>

                <div className="mt-2.5 text-ink-faint">
                  <span className="text-teal">$</span>{" "}
                  <span className="inline-block h-3.5 w-[7px] animate-blink bg-azure align-[-2px]" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface px-5 py-[18px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                {t("contact.form.socialProfiles")}
              </div>
              <div className="mt-3.5 flex gap-2.5">
                <a
                  href={socialLinks.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2.5 rounded-[10px] border border-line-strong bg-surface-sunken text-sm font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={socialLinks.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2.5 rounded-[10px] border border-line-strong bg-surface-sunken text-sm font-medium text-ink transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-surface-hover"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.06} className="min-w-0 flex-1">
            <form
              onSubmit={handleSubmit}
              className="relative h-full rounded-2xl border border-line bg-surface p-6 sm:p-7"
            >
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-medium text-ink"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`${FIELD_CLASS} h-[46px]`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-medium text-ink"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`${FIELD_CLASS} h-[46px]`}
                  />
                </div>
              </div>

              <div className="mt-[18px]">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`${FIELD_CLASS} h-[46px]`}
                />
              </div>

              <div className="mt-[18px]">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`${FIELD_CLASS} resize-y py-3 leading-[1.6]`}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-[50px] items-center gap-2.5 rounded-[11px] bg-azure px-6 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_28px_-12px_hsl(var(--azure)/0.7)] transition-transform duration-200 ease-smooth hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <Mail className="h-[17px] w-[17px]" />
                  {isLoading
                    ? t("contact.form.sending")
                    : t("contact.form.send")}
                </button>

                <span className="text-[13px] text-ink-faint">
                  {t("contact.directMail")}{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-ink transition-colors duration-200 hover:text-azure"
                  >
                    {EMAIL}
                  </a>
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
