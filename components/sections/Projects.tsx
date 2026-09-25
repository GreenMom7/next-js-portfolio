"use client";

interface ProjectsProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export default function Projects({ sectionRef }: ProjectsProps) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

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
              title:
                "Interface graphique pour une plateforme de simulation électromagnétique-multiphysique",
              period: "Mar 2024 - Apr 2024",
              association: "LEAT Research Lab",
              description:
                "Created a user-friendly graphical interface for LEAT's TLM electromagnetics simulator. Simplified complex geometry definitions and developed visualization tools for simulation results.",
              tech: ["Python", "GUI Development", "Scientific Visualization"],
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
  );
}
