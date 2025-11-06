import Section from './Section'

export default function Projects() {
  const items = [
    {
      title: 'Credit Card Data Analysis',
      desc: 'Performed exploratory data analysis to identify customer spending patterns, segment users, and detect potential high-risk customers using visualization and statistical analysis.',
      stack: ['Python', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/Ritik-yadav-934/Credit_data_analysis',
      report: '#',
      image: '/image/credit.jpg',
    },
    {
      title: 'Uber Fare Prediction Model (Certified Mentorship Project)',
      desc: 'Developed under the Uber Mentorship Program. Built a regression model to predict fare amounts using real-world ride data, feature engineering, and model evaluation metrics.',
      stack: ['Python', 'Scikit-learn', 'Random Forest', 'EDA'],
      github: 'https://github.com/Ritik-yadav-934/Predict-the-fare-amount-of-future-rides-using-regression-analysis',
      report: '#',
      image: '/image/uber.jpg',
    },
    {
      title: 'Student Performance Dashboard – Power BI',
      desc: 'Created an interactive dashboard to analyze student academic performance using DAX measures, KPIs, and filters to visualize marks, attendance, and subject-wise trends.',
      stack: ['Power BI', 'DAX', 'Data Modeling'],
      github: 'https://github.com/Ritik-yadav-934/Student-Performance-Dashboard',
      report: '#',
      image: '/image/student.jpg',
    },
    {
      title: 'Bank Customer Churn Analysis – Power BI',
      desc: 'Designed a dashboard visualizing customer churn patterns, identifying key retention factors through metrics such as churn rate, demographics, and tenure analysis.',
      stack: ['Power BI', 'SQL', 'Data Visualization'],
      github: 'https://github.com/Ritik-yadav-934/Customer-Churn-Analysis-Dashboard-Power-BI',
      report: '#',
      image: '/image/bank.jpg',
    },
    {
      title: 'Zomato Dataset Analysis',
      desc: 'Analyzed restaurant data to uncover insights on cuisines, ratings, and pricing strategies. Visualized patterns for better business understanding and decision-making.',
      stack: ['Python', 'Seaborn','Pandas','Matplotlib', 'EDA'],
      github: 'https://github.com/Ritik-yadav-934/Zomato-Dataset-Analysis-',
      report: '#',
      image: '/image/zomato.jpg',
    },
    {
      title: 'Bank Telemarketing Campaign Analysis',
      desc: 'Applied classification algorithms to predict customer responses to marketing campaigns. Identified patterns improving conversion rates for term deposits.',
      stack: ['Python', 'Scikit-learn', 'EDA'],
      github: 'https://github.com/Ritik-yadav-934/Bank-Telemarketing-Campaign-Case-Study.',
      report: '#',
      image: '/image/bankcusoter.jpg',
    },
  ]
  return (
    <Section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-xl border border-neutral-200 transition hover:shadow-lg dark:border-neutral-800">
            <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              {p.image ? (
                <>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </>
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-primary/30 to-transparent"></div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                    {s}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 flex gap-3">
                <a className="text-sm font-medium text-primary" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href={p.report}>
                  Report
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

