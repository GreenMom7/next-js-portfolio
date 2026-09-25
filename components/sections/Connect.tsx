"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

interface ConnectProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export default function Connect({ sectionRef }: ConnectProps) {
  return (
    <section id="connect" ref={sectionRef} className="py-20 sm:py-32 opacity-0">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Open to opportunities in full stack development, AI/ML projects,
              and embedded systems. Let's discuss how we can collaborate.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:akmal@example.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">Get in touch</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">CONNECT</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: "LinkedIn",
                icon: <Linkedin />,
                handle: "muhammad-akmal-sabri",
                url: "https://www.linkedin.com/in/muhammad-akmal-sabri/",
              },
              {
                name: "GitHub",
                icon: <Github />,
                handle: "GreenMom7",
                url: "https://github.com/GreenMom7",
              },
              {
                name: "Email",
                icon: <Mail />,
                handle: "akmalsabri73@gmail.com",
                url: "mailto:akmalsabri73@gmail.com",
              },
              {
                name: "Instagram",
                icon: <Instagram />,
                handle: "iwazuminn__",
                url: "https://www.instagram.com/iwazuminn__/",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm min-w-0"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {social.icon}
                    {social.name}
                  </div>
                  <div
                    className="text-sm text-muted-foreground truncate"
                    title={social.handle}
                  >
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
