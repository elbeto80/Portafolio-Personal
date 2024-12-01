import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alberto Alvarez - Full Stack Developer",
  description:
    "Portfolio de Alberto Alvarez - Desarrollador Full Stack con 8 años de experiencia",
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
      <body className={inter.className}>
        <div className="overflow-y-scroll h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="w-full md:w-[80%] mx-auto">
              <Header />
              <I18nProvider>{children}</I18nProvider>
              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
