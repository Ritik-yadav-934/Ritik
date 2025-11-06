import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
          <div>
            <span className="font-medium">Email:</span>{' '}
            <a className="text-primary" href="mailto:technosftritik04@gmail.com">technosftritik04@gmail.com</a>
          </div>
          <div>
            <span className="font-medium">GitHub:</span>{' '}
            <a className="text-primary" href="https://github.com/Ritik-yadav-934" target="_blank" rel="noreferrer">github.com</a>
          </div>
          <div>
            <span className="font-medium">LinkedIn:</span>{' '}
            <a className="text-primary" href="https://www.linkedin.com/in/ritik-yadav-38a686373/" target="_blank" rel="noreferrer">LinkedIn Account</a>
          </div>
          <div>
            <span className="font-medium">Phone:</span>{' '}
            <span>+91-9341034950</span>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
          <div className="grid gap-3">
            <input className="w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700" placeholder="Your Name" />
            <input className="w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700" placeholder="Your Email" type="email" />
            <textarea className="min-h-[120px] w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700" placeholder="Your Message" />
            <button className="rounded-md bg-primary px-4 py-2 font-medium text-white">Send</button>
          </div>
        </form>
      </div>
    </Section>
  )
}

