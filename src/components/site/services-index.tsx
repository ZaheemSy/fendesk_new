import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/site"

export function ServicesIndex() {
  return (
    <section className="shell section-y grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="title-lg">One team, from first sketch to live system.</h2>
        <p className="lede mt-6 max-w-md">
          Design, engineering and operations sit together here, so nothing gets lost being handed over.
        </p>
      </div>
      <ul className="border-t">
        {services.map(({ id, icon: Icon, name, summary }) => (
          <li key={id} className="border-b">
            <Link
              href={`/services#${id}`}
              className="group grid grid-cols-[auto_1fr_auto] gap-x-5 py-7 transition-[padding] duration-300 hover:pl-3 focus-visible:pl-3 motion-reduce:transition-none md:gap-x-8 md:py-9"
            >
              <Icon className="mt-1 size-6 text-metal" strokeWidth={1.5} aria-hidden />
              <span>
                <span className="title-md block">{name}</span>
                <span className="mt-2 block max-w-lg text-muted-foreground">{summary}</span>
              </span>
              <ArrowUpRight
                className="mt-1 size-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground motion-reduce:transition-none"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
