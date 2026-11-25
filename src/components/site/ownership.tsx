import Image from "next/image"
import { Check } from "lucide-react"
import { stack } from "@/lib/site"
import planningWall from "../../../public/images/planning-wall.jpg"

const owned = [
  "The repository, in your organisation",
  "The cloud accounts, on your billing",
  "The design files and documentation",
]

export function Ownership() {
  return (
    <section className="shell section-y">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Image
          src={planningWall}
          alt="A hand pinning a screen design to a wall of connected app wireframes"
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <div>
          <h2 className="title-lg">It&rsquo;s yours from the first commit.</h2>
          <p className="lede mt-6 max-w-lg">
            No licence to rent back, no black box. We build on widely used open tools, so any good engineer can pick up
            where we left off.
          </p>
          <ul className="mt-8 space-y-4">
            {owned.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-metal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dl className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-28 lg:grid-cols-5">
        {stack.map((group) => (
          <div key={group.area} className="border-t pt-5">
            <dt className="font-medium">{group.area}</dt>
            {group.tools.map((t) => (
              <dd key={t} className="mt-1.5 text-muted-foreground">
                {t}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </section>
  )
}
