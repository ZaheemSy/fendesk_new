import Link from "next/link"
import { navLinks, services, site } from "@/lib/site"

const link =
  "inline-block rounded-sm py-1 text-muted-foreground outline-offset-4 transition-colors hover:text-foreground"

export function SiteFooter() {
  return (
    <footer className="shell border-t pt-16 pb-10 text-[15px]">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 text-muted-foreground">{site.description}</p>
        </div>
        <nav aria-label="Services">
          <h2 className="mb-3 font-medium">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link className={link} href={`/services#${s.id}`}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="mb-3 font-medium">Company</h2>
          <ul>
            {navLinks.slice(1).map((l) => (
              <li key={l.href}>
                <Link className={link} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className={link} href="/#faq">
                Questions
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 font-medium">Contact</h2>
          <a className={link} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <br />
          <Link className={link} href="/contact">
            Project enquiry
          </Link>
        </div>
      </div>
      <p className="mt-16 border-t pt-6 text-sm text-muted-foreground">© {site.name}. All rights reserved.</p>
    </footer>
  )
}
