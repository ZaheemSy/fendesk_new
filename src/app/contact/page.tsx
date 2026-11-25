import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Fendesk about the software you need built, fixed or looked after.",
};

const next = [
  "We read your note and reply with questions, or a time to talk.",
  "We have a 30-minute call to understand the problem.",
  "You get a short proposal, with scope, approach and a budget range.",
];

export default function ContactPage() {
  return (
    <section className="shell grid gap-14 pt-[clamp(48px,7vw,112px)] pb-[clamp(72px,9vw,144px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
      <div>
        <h1 className="title-xl">Start a project</h1>
        <p className="lede mt-8 max-w-md">
          A few lines is enough to begin. If you&rsquo;d rather skip the form, write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="border-b border-input text-foreground transition-colors hover:border-foreground"
          >
            {site.email}
          </a>
          .
        </p>
        <h2 className="mt-14 text-lg font-medium">What happens next</h2>
        <ol className="mt-4 max-w-md border-t">
          {next.map((step, i) => (
            <li key={step} className="flex gap-5 border-b py-4 text-muted-foreground">
              <span className="font-serif text-xl leading-none text-metal italic">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <ContactForm />
    </section>
  );
}
