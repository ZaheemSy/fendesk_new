import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/site/contact-band";
import studioDesk from "../../../public/images/studio-desk.jpg";
import teamWorking from "../../../public/images/team-working.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "How Fendesk works, and what we believe makes software last.",
};

const principles = [
  {
    name: "Small teams, few handovers",
    body: "The people who scope your project are the people who build it. You always know who to call.",
  },
  {
    name: "Show, then discuss",
    body: "A rough working version settles more arguments than a long document, so we make one early.",
  },
  {
    name: "Boring where it counts",
    body: "Proven tools for the parts that must never fail. New ideas only where they earn their place.",
  },
  {
    name: "Say the awkward thing",
    body: "If a feature isn't worth building, or an off-the-shelf tool would do, we'll tell you before you spend the money.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-[clamp(48px,7vw,112px)] pb-12 md:pb-20">
        <h1 className="title-xl max-w-5xl">
          We build software for the years <span className="font-serif font-normal tracking-tight italic">after</span>{" "}
          launch.
        </h1>
      </section>
      <div className="shell grid gap-4 md:grid-cols-[1.7fr_1fr]">
        <Image
          src={teamWorking}
          alt="Four people working on laptops around a shared wooden table"
          placeholder="blur"
          loading="eager"
          sizes="(min-width: 768px) 63vw, 100vw"
          className="aspect-[3/2] size-full rounded-xl object-cover"
        />
        <Image
          src={studioDesk}
          alt="A laptop on a long table beside tall windows and a large plant"
          placeholder="blur"
          sizes="(min-width: 768px) 37vw, 100vw"
          className="aspect-[3/2] size-full rounded-xl object-cover md:aspect-auto"
        />
      </div>
      <section className="shell section-y grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-20">
        <h2 className="title-lg">Why we work this way</h2>
        <div className="max-w-2xl space-y-6 text-xl leading-relaxed tracking-tight">
          <p>
            Most software isn&rsquo;t judged on the day it launches. It&rsquo;s judged two years later, when the team
            has changed, traffic has grown and someone needs to add the feature nobody thought of.
          </p>
          <p className="text-muted-foreground">
            Fendesk is a software company built around that moment. We keep designers, engineers and operations in one
            team, write things down, and make choices the next person will thank us for.
          </p>
        </div>
      </section>
      <section className="shell pb-[clamp(72px,9vw,144px)]">
        <h2 className="title-lg">What we hold to</h2>
        <ul className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.name} className="border-t pt-6">
              <h3 className="title-md">{p.name}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <ContactBand />
    </>
  );
}
