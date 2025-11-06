export default function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-4 text-center dark:border-neutral-800">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-500">{label}</div>
    </div>
  )
}

