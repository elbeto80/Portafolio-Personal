"use client";

import Header from "@/components/Header";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}