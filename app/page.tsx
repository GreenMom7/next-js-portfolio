"use client";

import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Marquee from "@/components/Marquee";

const quote = "U";

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
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["quote", "intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <section
          id="quote"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex flex-col justify-center gap-8 opacity-0"
        >
          <h2 className="font-mono text-xl md:text-2xl font-bold tracking-tight">
            Technologies
          </h2>
          <Marquee />
        </section>

        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Muhammad
                  <br />
                  <span className="text-muted-foreground">Akmal Sabri</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full Stack Developer & Computer Science Graduate Student
                  crafting innovative solutions at the intersection of
                  <span className="text-foreground">
                    {" "}
                    electrical engineering
                  </span>
                  ,
                  <span className="text-foreground"> software development</span>
                  , and
                  <span className="text-foreground">
                    {" "}
                    artificial intelligence
                  </span>
                  .
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Kuala Lumpur, Malaysia</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">Full Stack Developer</div>
                  <div className="text-muted-foreground">
                    @ Consury Technic Sdn. Bhd.
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Sep 2025 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "Angular",
                    "MongoDB",
                    "Python",
                    "Machine Learning",
                    "VHDL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">
                Experience & Education
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2021 — Present
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "Full Stack Developer",
                  company: "Consury Technic Sdn. Bhd.",
                  type: "Internship",
                  description:
                    "Developing modern web applications using Next.js framework in a hybrid work environment.",
                  tech: ["Next.js", "React", "TypeScript"],
                },
                {
                  year: "2024",
                  role: "Master of Engineering",
                  company: "UTBM",
                  type: "Computer Science",
                  description:
                    "Pursuing advanced studies in Computer Science, focusing on software engineering and artificial intelligence.",
                  tech: ["Research", "AI/ML", "Software Engineering"],
                },
                {
                  year: "2024",
                  role: "Research Assistant",
                  company: "LEAT - Laboratoire d'Électronique",
                  type: "Internship",
                  description:
                    "Developed electromagnetics simulator interface for TLM systems, creating user-friendly geometry definition tools and visualization systems.",
                  tech: ["Python", "GUI Development", "Scientific Computing"],
                },
                {
                  year: "2022",
                  role: "Bachelor's Degree",
                  company: "IUT Nice Côte d'Azur",
                  type: "Electrical Engineering",
                  description:
                    "Graduated with 16.227/20. Specialized in industrial computing, AI/ML applications, and control systems. Built projects including wildfire detection, traffic classification, and PLC programming.",
                  tech: ["Python", "C", "VHDL", "Keras", "TensorFlow"],
                },
                {
                  year: "2021",
                  role: "Foundation in Engineering",
                  company: "Universiti Kuala Lumpur",
                  type: "Foundation",
                  description:
                    "Achieved 17.65/20. Intensive French language studies with engineering fundamentals including Mathematics, Physics, and C++ programming.",
                  tech: ["C++", "Arduino", "Engineering Fundamentals"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {job.role}
                      </h3>
                      <div className="text-muted-foreground">{job.company}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {job.type}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 sm:p-8 border border-border rounded-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Scholarship Holder
                    </h3>
                    <div className="text-muted-foreground">
                      Majlis Amanah Rakyat (MARA)
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Jul 2021 — Present · 4 yrs 6 mos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Featured Projects
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Moodle-Style Learning Platform",
                  period: "Mar 2025 - Jun 2025",
                  association: "UTBM",
                  description:
                    "Full stack development of a Moodle-style web application using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Created a comprehensive learning management system with database integration and modern frontend architecture.",
                  tech: ["Angular", "MongoDB", "Express.js", "Node.js"],
                },
                {
                  title: "Roue - E-Bike Control System",
                  period: "May 2024 - Jun 2024",
                  association: "IUT Nice Côte d'Azur",
                  description:
                    "In-depth study of electric-assist bike control systems. Developed a complete program using Altera PLD to optimize e-bike performance and efficiency through advanced motor control algorithms.",
                  tech: [
                    "VHDL",
                    "Altera PLD",
                    "Control Systems",
                    "Hardware Programming",
                  ],
                },
                {
                  title: "Electromagnetics Simulator Interface",
                  period: "Mar 2024 - Apr 2024",
                  association: "LEAT Research Lab",
                  description:
                    "Created a user-friendly graphical interface for LEAT's TLM electromagnetics simulator. Simplified complex geometry definitions and developed visualization tools for simulation results.",
                  tech: [
                    "Python",
                    "GUI Development",
                    "Scientific Visualization",
                  ],
                },
                {
                  title: "AI Wildfire Detection System",
                  period: "2023",
                  association: "IUT Nice Côte d'Azur",
                  description:
                    "Built machine learning models using MLP and CNN architectures to detect wildfires from hyperspectral satellite imagery. Utilized Keras & TensorFlow in Google Colab environment.",
                  tech: [
                    "Python",
                    "TensorFlow",
                    "Keras",
                    "CNN",
                    "Image Processing",
                  ],
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {project.association}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                        {project.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Open to opportunities in full stack development, AI/ML
                  projects, and embedded systems. Let's discuss how we can
                  collaborate.
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
              <div className="text-sm text-muted-foreground font-mono">
                CONNECT
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "LinkedIn",
                    handle: "muhammad-akmal-sabri",
                    url: "https://www.linkedin.com/in/muhammad-akmal-sabri/",
                  },
                  {
                    name: "GitHub",
                    handle: "GreenMom7",
                    url: "https://github.com/GreenMom7",
                  },
                  {
                    name: "Email",
                    handle: "Contact",
                    url: "mailto:akmalsabri73@gmail.com",
                  },
                  { name: "Portfolio", handle: "Projects", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Muhammad Akmal Sabri. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Full Stack Developer • Computer Science Graduate Student
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
