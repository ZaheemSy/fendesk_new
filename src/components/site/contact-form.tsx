"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { services, site } from "@/lib/site"

const field = "h-12 rounded-lg text-base md:text-base shadow-none"
const webLink = "border-b border-input text-foreground outline-offset-4 transition-colors hover:border-foreground"

/** The enquiry as a link for the default mail app, and for webmail as a fallback. */
function composeLinks(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim()
  const to = encodeURIComponent(site.email)
  const subject = encodeURIComponent(`Project enquiry: ${get("service")}`)
  const lines = [get("message"), "", get("name"), get("company")]
  // mail apps expect CRLF line breaks in a mailto body
  const body = encodeURIComponent(lines.join("\n").trim().replace(/\r?\n/g, "\r\n"))
  return {
    app: `mailto:${site.email}?subject=${subject}&body=${body}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
  }
}

export function ContactForm() {
  const [links, setLinks] = useState<ReturnType<typeof composeLinks> | null>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next = composeLinks(new FormData(e.currentTarget))
    setLinks(next)
    window.location.href = next.app
  }

  return (
    <form
      onSubmit={onSubmit}
      // the web links must never carry an out-of-date draft
      onChange={() => setLinks(null)}
      className="grid gap-6 rounded-xl bg-card p-6 sm:grid-cols-2 md:p-10"
    >
      <div className="grid gap-2.5">
        <Label htmlFor="name">Your name</Label>
        <Input id="name" name="name" autoComplete="name" required maxLength={120} className={field} />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" name="company" autoComplete="organization" maxLength={120} className={field} />
      </div>
      <div className="grid gap-2.5 sm:col-span-2">
        <Label htmlFor="service">What do you need?</Label>
        <select
          id="service"
          name="service"
          className="h-12 w-full rounded-lg border border-input bg-transparent px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30 [&>option]:bg-background"
        >
          {services.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="grid gap-2.5 sm:col-span-2">
        <Label htmlFor="message">About the project</Label>
        <Textarea
          id="message"
          name="message"
          required
          // some mail apps cut off links of around 2,000 characters
          maxLength={1200}
          rows={6}
          aria-describedby="message-help"
          className="min-h-40 rounded-lg text-base shadow-none md:text-base"
        />
        <p id="message-help" className="text-sm text-muted-foreground">
          The problem, who it affects, and any date you&rsquo;re working towards.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <Button type="submit" className="h-12 rounded-full px-6 text-[15px]">
          Open in email app
        </Button>
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {links ? (
            <>
              Nothing opened? Use{" "}
              <a className={webLink} href={links.outlook} target="_blank" rel="noopener noreferrer">
                Outlook on the web
              </a>{" "}
              or{" "}
              <a className={webLink} href={links.gmail} target="_blank" rel="noopener noreferrer">
                Gmail
              </a>
              .
            </>
          ) : (
            "Your enquiry opens as a draft, ready for you to send."
          )}
        </p>
      </div>
    </form>
  )
}
