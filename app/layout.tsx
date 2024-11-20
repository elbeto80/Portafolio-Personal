import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alberto Alvarez - Full Stack Developer",
  description:
    "Portfolio de Alberto Alvarez - Desarrollador Full Stack con 8 años de experiencia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>{children}</I18nProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
