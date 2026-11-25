import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function ContactBand() {
  return (
    <section className="shell section-y border-t">
      <h2 className="title-xl max-w-5xl">
        Tell us what&rsquo;s <span className="font-serif font-normal tracking-tight italic">slowing you down.</span>
      </h2>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
        <Button asChild className="h-12 rounded-full px-6 text-[15px] has-[>svg]:px-6">
          <Link href="/contact">
            Start a project <ArrowRight aria-hidden />
          </Link>
        </Button>
        <a
          href={`mailto:${site.email}`}
          className="border-b border-input pb-0.5 outline-offset-4 transition-colors hover:border-foreground"
        >
          {site.email}
        </a>
      </div>
    </section>
  )
}
