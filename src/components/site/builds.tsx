import type { ReactNode } from "react"
import { Check, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

/* The previews are drawn examples of each product type, not client work. */

const jobs = [
  ["Pump inspection", "North depot", "On site"],
  ["Meter replacement", "Harbour road", "Scheduled"],
  ["Leak report", "Station 4", "Needs parts"],
  ["Annual service", "Mill lane", "Done"],
]

const statusTone: Record<string, string> = {
  "On site": "bg-metal",
  Scheduled: "bg-muted-foreground",
  "Needs parts": "bg-destructive",
  Done: "bg-ok",
}

function OperationsPreview() {
  return (
    <div className="w-full rounded-lg border bg-background">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <span className="font-medium">Today&rsquo;s jobs</span>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs">All crews</span>
      </div>
      {jobs.map(([job, place, status]) => (
        <div key={job} className="grid grid-cols-[1.3fr_auto] items-center gap-4 border-b px-5 py-3.5 text-sm last:border-0 sm:grid-cols-[1.4fr_1fr_8rem]">
          <span className="truncate">{job}</span>
          <span className="hidden truncate text-muted-foreground sm:block">{place}</span>
          <span className="flex items-center gap-2">
            <span className={cn("size-2 rounded-full", statusTone[status])} />
            {status}
          </span>
        </div>
      ))}
    </div>
  )
}

function PortalPreview() {
  const steps = ["Ordered", "Packed", "On its way", "Delivered"]
  return (
    <div className="w-full rounded-lg border bg-background p-5">
      <p className="font-medium">Order 20418</p>
      <p className="text-sm text-muted-foreground">Arriving Thursday</p>
      <ol className="mt-6 grid grid-cols-4">
        {steps.map((s, i) => (
          <li key={s} className="relative text-xs">
            {i < 3 && <span className={cn("absolute top-[9px] left-5 h-0.5 w-[calc(100%-1.25rem)]", i < 2 ? "bg-foreground" : "bg-border")} />}
            <span className={cn("grid size-5 place-items-center rounded-full border", i <= 2 ? "border-foreground bg-foreground text-background" : "bg-background")}>
              {i < 2 && <Check className="size-3" strokeWidth={3} />}
            </span>
            <span className={cn("mt-2 block pr-1", i > 2 && "text-muted-foreground")}>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function FieldAppPreview() {
  const items: [string, boolean][] = [
    ["Isolate supply", true],
    ["Photograph the gauge", true],
    ["Replace seal", false],
    ["Customer signature", false],
  ]
  return (
    <div className="mx-auto w-60 rounded-t-[2rem] border border-b-0 bg-background px-5 pt-7 pb-6">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Offline</span>
        <span className="flex items-center gap-1.5">
          <RefreshCw className="size-3" /> 2 to sync
        </span>
      </div>
      <p className="mt-4 text-lg font-medium tracking-tight">Pump inspection</p>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map(([label, done]) => (
          <li key={label} className="flex items-center gap-3">
            <span className={cn("grid size-5 place-items-center rounded-md border border-input", done && "border-ok bg-ok text-background")}>
              {done && <Check className="size-3" strokeWidth={3} />}
            </span>
            <span className={cn(done && "text-muted-foreground line-through")}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IntegrationPreview() {
  const lines = [
    ["order.created", "warehouse", "200"],
    ["invoice.paid", "accounts", "200"],
    ["stock.updated", "storefront", "retry"],
    ["stock.updated", "storefront", "200"],
    ["order.shipped", "sms", "200"],
  ]
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-background p-5 font-mono text-[13px] leading-7">
      {lines.map(([event, target, result], i) => (
        <div key={i} className="grid grid-cols-[1fr_auto] gap-4 sm:grid-cols-[1.2fr_1fr_3rem]">
          <span className="truncate">{event}</span>
          <span className="hidden text-muted-foreground sm:block">→ {target}</span>
          <span className={result === "200" ? "text-ok" : "text-metal"}>{result}</span>
        </div>
      ))}
    </div>
  )
}

function Tile({
  title,
  body,
  children,
  className,
  flush,
}: {
  title: string
  body: string
  children: ReactNode
  className?: string
  flush?: boolean
}) {
  return (
    <li className={cn("flex flex-col overflow-hidden rounded-xl bg-card", className)}>
      <div className="p-6 md:p-8">
        <h3 className="title-md">{title}</h3>
        <p className="mt-2 max-w-md text-muted-foreground">{body}</p>
      </div>
      <div aria-hidden className={cn("mt-auto flex px-6 md:px-8", flush ? "pb-0" : "pb-6 md:pb-8")}>
        {children}
      </div>
    </li>
  )
}

export function Builds() {
  return (
    <section id="builds" className="shell pb-[clamp(72px,9vw,144px)]">
      <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
        <h2 className="title-lg max-w-3xl">The software a business leans on every day.</h2>
        <p className="lede max-w-md">
          Four kinds of product weFour kinds of product we&rsquo;re asked for most.rsquo;re set up to build. Yours may be one of these, or a few of them joined together.
        </p>
      </div>
      <ul className="grid gap-4 lg:grid-cols-5">
        <Tile
          className="lg:col-span-3"
          title="Operations dashboards"
          body="Replace the shared spreadsheet with one place to see, assign and finish work."
        >
          <OperationsPreview />
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="Field and mobile apps"
          body="Checklists, photos and signatures that save on the device and sync later."
          flush
        >
          <FieldAppPreview />
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="Customer portals"
          body="Let customers order, track and pay without calling you."
        >
          <PortalPreview />
        </Tile>
        <Tile
          className="lg:col-span-3"
          title="Integrations"
          body="Connect the tools you already pay for, with retries and logs you can read."
        >
          <IntegrationPreview />
        </Tile>
      </ul>
    </section>
  )
}
