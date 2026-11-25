import type { Metadata } from "next";
import { ContactBand } from "@/components/site/contact-band";
import { Engagements } from "@/components/site/engagements";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product design, web platforms, mobile apps, cloud, data and AI, and long-term support from one software team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="shell pt-[clamp(48px,7vw,112px)] pb-[clamp(56px,7vw,112px)]">
        <h1 className="title-xl max-w-5xl">Everything it takes to ship software and keep it running.</h1>
        <p className="lede mt-8 max-w-2xl">
          Hire us for one of these or all six. Either way, you work with the people doing the work.
        </p>
      </section>
      <div className="shell pb-[clamp(72px,9vw,144px)]">
        {services.map(({ id, icon: Icon, name, summary, detail, includes }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-title`}
            className="grid gap-6 border-t py-12 md:py-16 lg:grid-cols-[1fr_1.3fr_0.8fr] lg:gap-16"
          >
            <div>
              <Icon className="size-7 text-metal" strokeWidth={1.5} aria-hidden />
              <h2 id={`${id}-title`} className="mt-5 text-3xl leading-tight font-medium tracking-tight text-balance">
                {name}
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-xl leading-snug tracking-tight text-pretty">{summary}</p>
              <p className="mt-5 text-muted-foreground">{detail}</p>
            </div>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Engagements />
      <ContactBand />
    </>
  );
}
