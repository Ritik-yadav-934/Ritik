import Section from './Section'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 viz-grid opacity-40 dark:opacity-30"></div>
      <Section id="home">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
              Aspiring Data Scientist
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Ritik Yadav
            </h1>

            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
              Aspiring Data Scientist | Machine Learning Enthusiast
            </p>

            <p className="mt-4 max-w-xl text-neutral-700 dark:text-neutral-400">
              Passionate about uncovering patterns in data and developing machine learning models 
              that create measurable business impact. My work focuses on transforming raw data 
              into clear, actionable insights using Python, Power BI, and ML algorithms.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-700 dark:text-neutral-300">
              <div className="rounded-lg bg-primary/10 px-3 py-2 text-center">
                <span className="block font-semibold text-primary">10+</span>
                <span>Data Projects</span>
              </div>
              <div className="rounded-lg bg-primary/10 px-3 py-2 text-center">
                <span className="block font-semibold text-primary">2+</span>
                <span>Hackathons</span>
              </div>
              <div className="rounded-lg bg-primary/10 px-3 py-2 text-center">
                <span className="block font-semibold text-primary">3+</span>
                <span>Certifications</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-primary px-5 py-2.5 font-medium text-white shadow-soft"
              >
                View Projects
              </a>
              <a
                href="/Ritik%20Yadav.pdf"
                download="Ritik Yadav.pdf"
                className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex gap-5 text-neutral-600 dark:text-neutral-300">
              <a
                href="https://github.com/Ritik-yadav-934"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-yadav-38a686373/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:technosftritik04@gmail.com"
                className="hover:text-primary transition"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <i className="fa-solid fa-angles-down animate-bounce"></i>
              <span>Scroll down to explore my work</span>
            </div>
          </div>

          <div className="relative">
            <div className="glass relative mx-auto aspect-square w-64 rounded-2xl border border-neutral-200 p-4 shadow-xl dark:border-neutral-800 md:w-80">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/25 to-transparent"></div>
              <img
                alt="Ritik Yadav"
                src="/RitikGemini.png"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

