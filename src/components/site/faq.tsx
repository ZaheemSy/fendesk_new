import { Plus } from "lucide-react"
import { faqs } from "@/lib/site"

export function Faq() {
  return (
    <section
      id="faq"
      className="shell grid gap-10 pb-[clamp(72px,9vw,144px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-20"
    >
      <h2 className="title-lg">Before you get in touch.</h2>
      <div className="border-t">
        {faqs.map((f) => (
          <details key={f.q} name="faq" className="group border-b">
            <summary className="title-md flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus
                className="size-6 shrink-0 text-metal transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                strokeWidth={1.5}
                aria-hidden
              />
            </summary>
            <p className="max-w-2xl pb-8 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
