export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center md:text-left">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">Ritik Yadav</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Aspiring Data Scientist passionate about uncovering insights through data analysis,
              visualization, and machine learning. Turning data into impactful solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="#home" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Connect with Me
            </h4>
            <div className="mt-4 flex flex-col space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href="https://www.linkedin.com/in/ritik-yadav-38a686373/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <i className="fa-brands fa-linkedin text-xl text-primary"></i>
                LinkedIn
              </a>
              <a
                href="https://github.com/Ritik-yadav-934"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <i className="fa-brands fa-github text-xl text-primary"></i>
                GitHub
              </a>
              <a
                href="mailto:technosftritik04@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <i className="fa-solid fa-envelope text-xl text-primary"></i>
                technosftritik04@gmail.com
              </a>
              <a
                href="tel:+919341034950"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <i className="fa-solid fa-phone text-xl text-primary"></i>
                +91 93410 34950
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-neutral-200 dark:border-neutral-800"></div>

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Ritik Yadav. All rights reserved.</p>
          <p className="text-neutral-500">
            Built ❤️ By <span className="text-primary font-medium">Ritik Yadav</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

