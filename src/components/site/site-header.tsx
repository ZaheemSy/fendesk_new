"use client"

import { useLayoutEffect, useState } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks, site } from "@/lib/site"
import { reapplyStoredTheme, setTheme, useTheme } from "@/lib/use-theme"

export function SiteHeader() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  useLayoutEffect(reapplyStoredTheme, [])

  const close = () => setOpen(false)

  return (
    <header
      className="sticky top-0 z-40 border-b border-transparent bg-background/90 backdrop-blur-md"
      onKeyDown={(e) => {
        if (e.key === "Escape") close()
      }}
    >
      <div className="shell flex h-(--header-h) items-center justify-between gap-6">
        <Link
          href="/"
          onClick={close}
          className="rounded-sm text-lg font-semibold tracking-tight outline-offset-4"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-2 md:gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-sm text-sm text-muted-foreground outline-offset-4 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-11 rounded-full"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Moon className="dark:hidden" />
              <Sun className="hidden dark:block" />
            </Button>
            <Button asChild variant="outline" className="hidden h-10 rounded-full border-input bg-transparent px-5 shadow-none sm:inline-flex">
              <Link href="/contact" onClick={close}>
                Contact
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="-mr-3.5 size-11 rounded-full md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="shell absolute inset-x-0 top-full h-[calc(100svh-var(--header-h))] overflow-y-auto bg-background pt-4 pb-10 md:hidden"
      >
        <ul>
          {[...navLinks, { label: "Contact", href: "/contact" }].map((l) => (
            <li key={l.href} className="border-b">
              <Link
                href={l.href}
                onClick={close}
                className="block py-5 text-3xl font-medium tracking-tight"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
