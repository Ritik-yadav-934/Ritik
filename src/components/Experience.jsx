import Section from './Section'

export default function Experience() {
  const experiences = [
    {
      title: 'Uber Certified Mentorship Program',
      desc: 'Completed a mentorship project focused on Uber Fare Prediction using regression modeling and data analysis under real-world guidance.',
      icon: 'fa-solid fa-car',
    },
    {
      title: 'Workshop at IIT Patna – AI/ML with TechGyan',
      desc: 'Hands-on training on Artificial Intelligence and Machine Learning fundamentals, model building, and deployment techniques.',
      icon: 'fa-solid fa-graduation-cap',
    },
    {
      title: 'Data Science Menternship Projects',
      desc: 'Completed multiple menternship projects involving data preprocessing, EDA, visualization, and model evaluation.',
      icon: 'fa-solid fa-database',
    },
  ]

  const certifications = [
    {
      title: 'Advanced Data Science Certification – upGrad',
      desc: 'Completed advanced coursework in data science covering supervised/unsupervised ML, data visualization, and predictive analytics using Python.',
      icon: 'fa-solid fa-certificate',
      link: 'https://github.com/Ritik-yadav-934',
    },
    {
    title: 'Uber Mentorship Program Certificate',
    desc: 'Successfully completed the Uber Certified Mentorship Program focused on real-world data analytics and regression-based fare prediction modeling. Gained hands-on experience in data processing, model evaluation, and mentorship from industry experts.',
    icon: 'fa-solid fa-award',
    link: 'https://github.com/Ritik-yadav-934/Predict-the-fare-amount-of-future-rides-using-regression-analysis', // link to your Uber project or certificate
  },

  ]

  const hackathons = [
    {
      title: 'Surya Namaskar Pose Detection Hackathon',
      desc: 'Developed a pose estimation system using OpenCV and Mediapipe to analyze yoga postures in real time.',
      icon: 'fa-solid fa-person-running',
    },
    {
      title: 'AI & ML Innovation Hackathon – IIT Patna with TechGyan',
      desc: 'Participated in a national-level hackathon focused on implementing AI/ML solutions for healthcare and wellness problems.',
      icon: 'fa-solid fa-lightbulb',
    },
  ]

  return (
    <Section id="experience">
      <h2 className="text-2xl font-semibold">Experience & Achievements</h2>

      <div className="mt-6 space-y-6">
        <h3 className="text-lg font-medium text-primary">Professional Experience</h3>
        <ul className="space-y-4">
          {experiences.map((exp) => (
            <li
              key={exp.title}
              className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <i className={`${exp.icon} text-primary text-lg mt-1`}></i>
              <div>
                <div className="font-semibold text-neutral-800 dark:text-neutral-100">{exp.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 space-y-6">
        <h3 className="text-lg font-medium text-primary">Certifications</h3>
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <i className={`${cert.icon} text-primary text-lg mt-1`}></i>
              <div>
                <div className="font-semibold text-neutral-800 dark:text-neutral-100">{cert.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{cert.desc}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 space-y-6">
        <h3 className="text-lg font-medium text-primary">Hackathons</h3>
        <ul className="space-y-4">
          {hackathons.map((hack) => (
            <li
              key={hack.title}
              className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <i className={`${hack.icon} text-primary text-lg mt-1`}></i>
              <div>
                <div className="font-semibold text-neutral-800 dark:text-neutral-100">{hack.title}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{hack.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Ritik-yadav-934"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
        >
          <i className="fa-brands fa-github text-lg"></i> Visit My GitHub Profile
        </a>
      </div>
    </Section>
  )
}

