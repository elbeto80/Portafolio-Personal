import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SkipLink from "@/components/skip-link";
import { Toaster } from "@/components/ui/toaster";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://www.albertoalvarez.dev";
const TITLE = "Alberto Alvarez — Senior Full Stack Developer";
/* El HTML estático sale en español; en el cliente, I18nProvider actualiza
   título y descripción al cambiar de idioma. */
const DESCRIPTION =
  "Portafolio de Alberto Alvarez, Senior Full Stack Developer: más de 20 años en tecnología y 12 en desarrollo de aplicaciones web, apps móviles y sistemas backend escalables.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Alberto Alvarez", url: SITE_URL }],
  keywords: [
    "Alberto Alvarez",
    "Senior Full Stack Developer",
    "Desarrollador Full Stack",
    "Laravel",
    "React",
    "Next.js",
    "Vue.js",
    "React Native",
    "Medellín",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Alberto Alvarez",
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_CO",
    alternateLocale: ["en_US"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${body.variable} ${display.variable} ${mono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <SkipLink />

            <Header />
            <main id="main">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
