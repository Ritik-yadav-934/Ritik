import Section from './Section'

export default function Skills() {
  const groups = [
    {
      title: 'Data Analysis',
      items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data Cleaning', 'Feature Engineering'],
    },
    {
      title: 'Machine Learning',
      items: ['Scikit-learn', 'TensorFlow', 'Regression', 'Classification', 'Model Evaluation'],
    },
    {
      title: 'Data Visualization',
      items: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Plotly'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Jupyter', 'Google Colab', 'Git', 'Excel', 'VS Code', 'GitHub'],
    },
    {
      title: 'Soft Skills',
      items: ['Analytical Thinking', 'Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
    },
    {
      title: 'Domains of Interest',
      items: ['AI & Machine Learning', 'Data Science', 'Business Analytics', 'Cloud Data', 'Automation'],
    },
  ]

  return (
    <Section id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
        A combination of technical expertise, analytical mindset, and visualization skills 
        that help me turn data into meaningful business insights and predictive models.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:from-neutral-900 dark:to-neutral-950 dark:border-neutral-800"
          >
            <div className="mb-3 text-lg font-semibold text-primary">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 transition group-hover:bg-primary group-hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:group-hover:bg-primary/90"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

