export default function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  )
}

