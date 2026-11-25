import { Builds } from "@/components/site/builds";
import { ContactBand } from "@/components/site/contact-band";
import { Engagements } from "@/components/site/engagements";
import { Faq } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { Ownership } from "@/components/site/ownership";
import { Process } from "@/components/site/process";
import { ServicesIndex } from "@/components/site/services-index";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesIndex />
      <Builds />
      <Process />
      <Ownership />
      <Engagements />
      <Faq />
      <ContactBand />
    </>
  );
}
