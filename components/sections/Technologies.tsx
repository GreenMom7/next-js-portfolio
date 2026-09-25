"use client";

import Marquee from "@/components/Marquee";

interface TechnologiesProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export default function Technologies({ sectionRef }: TechnologiesProps) {
  return (
    <section
      id="quote"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center gap-8 opacity-0"
    >
      <h2 className="font-mono text-xl md:text-2xl font-bold tracking-tight">
        Technologies
      </h2>
      <Marquee />
    </section>
  );
}
