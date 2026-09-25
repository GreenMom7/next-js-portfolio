"use client";

interface HeroProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export default function Hero({ sectionRef }: HeroProps) {
  return (
    <header
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / 2026
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Muhammad
              <br />
              <span className="text-muted-foreground">Akmal Sabri</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Final-Year Computer Science & AI Student crafting innovative
              solutions at the intersection of
              <span className="text-foreground"> electrical engineering</span>,
              <span className="text-foreground"> software development</span>,
              and
              <span className="text-foreground"> artificial intelligence</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Looking for a final-year internship — Feb 2027
              </div>
              <div>Belfort, France</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              CURRENTLY
            </div>
            <div className="space-y-2">
              <div className="text-foreground">Final-Year Student</div>
              <div className="text-muted-foreground">
                @ UTBM (Engineering Diploma, Computer Science)
              </div>
              <div className="text-xs text-muted-foreground">
                Mar 2026 — Present
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Science",
                "Machine Learning",
                "Generative AI",
                "Web Development",
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
  );
}
