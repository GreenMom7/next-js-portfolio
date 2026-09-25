"use client";

interface ExperienceProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export default function Experience({ sectionRef }: ExperienceProps) {
  return (
    <section
      id="work"
      ref={sectionRef}
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
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
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
                <h3 className="text-lg font-medium mb-2">Scholarship Holder</h3>
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
  );
}
