import Section from './Section'
import Stat from './Stat'

export default function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl font-semibold">About Me</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <p>
            I'm <span className="font-semibold text-primary">Ritik Yadav</span>, a passionate
            <span className="text-primary font-medium"> Data Science and Machine Learning enthusiast </span>
            pursuing my B.Tech in Computer Science from
            <span className="font-medium"> IES University, Bhopal (2023–2027)</span>.
          </p>

          <p>
            My curiosity about how data shapes decisions led me to explore fields like machine learning,
            analytics, and business intelligence. I enjoy transforming raw datasets into insightful visuals and predictive models
            that help uncover patterns and support data-driven strategies.
          </p>

          <p>
            Over the past few years, I've completed multiple academic and menternship projects involving
            <span className="font-medium"> Exploratory Data Analysis (EDA)</span>, 
            <span className="font-medium"> Machine Learning</span>,
            and <span className="font-medium"> Dashboard Development</span> using tools such as Python, Power BI, and Scikit-learn.
            I aim to apply my skills to solve real-world problems and contribute to impactful innovations in AI and analytics.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-lg text-primary mb-2">What I Do</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>🔍 Perform data cleaning, preprocessing, and visualization for better insights.</li>
              <li>🤖 Build and evaluate ML models for regression and classification problems.</li>
              <li>📊 Design interactive dashboards using Power BI for storytelling and analytics.</li>
              <li>🧠 Work on projects that merge AI, real-time analytics, and automation.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Projects" value="10+" />
            <Stat label="Tools" value="10+" />
            <Stat label="Hackathons" value="2+" />
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg text-primary mb-2">Tech Stack & Tools</h3>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Python</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Pandas</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">NumPy</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Scikit-learn</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Power BI</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Matplotlib</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Seaborn</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">SQL</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Excel</span>
              <span className="rounded-md bg-neutral-100 px-3 py-1 dark:bg-neutral-800">Git & GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

