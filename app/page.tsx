"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Hero
          sectionRef={(el) => {
            sectionsRef.current[0] = el;
          }}
        />
        <Experience
          sectionRef={(el) => {
            sectionsRef.current[1] = el;
          }}
        />
        <Technologies
          sectionRef={(el) => {
            sectionsRef.current[2] = el;
          }}
        />
        <Projects
          sectionRef={(el) => {
            sectionsRef.current[3] = el;
          }}
        />
        <Connect
          sectionRef={(el) => {
            sectionsRef.current[4] = el;
          }}
        />
        <Footer isDark={isDark} toggleTheme={toggleTheme} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
