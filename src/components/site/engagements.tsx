import Link from "next/link"
import { Button } from "@/components/ui/button"
import { engagements } from "@/lib/site"

export function Engagements() {
  return (
    <section className="shell pb-[clamp(72px,9vw,144px)]">
      <div className="grid gap-x-20 gap-y-8 rounded-xl bg-card p-6 md:p-12 lg:p-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="title-lg max-w-2xl">Three ways to work together.</h2>
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/contact">Talk it through</Link>
          </Button>
        </div>
        <ul className="mt-4 divide-y border-t lg:mt-8">
          {engagements.map((e) => (
            <li key={e.name} className="grid gap-4 py-8 last:pb-0 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-10">
              <h3 className="title-md">{e.name}</h3>
              <p className="text-muted-foreground">{e.fit}</p>
              <ul className="space-y-1.5">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
