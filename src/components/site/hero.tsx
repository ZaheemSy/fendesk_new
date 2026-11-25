"use client"

import type { CSSProperties } from "react"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import { site } from "@/lib/site"
import { useTheme } from "@/lib/use-theme"

/* CSS variables, not props: the right colours are there before hydration. */
const themedByCss = {
  "--sh-bg": "var(--background)",
  "--sh-fg": "var(--foreground)",
  "--sh-acc": "var(--foreground)",
} as CSSProperties

export function Hero() {
  const theme = useTheme()

  return (
    <SculptureHero
      theme={theme}
      // the site header owns navigation and the theme switch
      showNav={false}
      height="max(calc(100svh - var(--header-h)), 600px)"
      src="/sculpture/light.webp"
      darkSrc="/sculpture/dark.webp"
      mobileSrc="/sculpture/light-mobile.webp"
      mobileDarkSrc="/sculpture/dark-mobile.webp"
      imageAlt="Abstract sculpture of metallic strands looping through a cloud of particles"
      backdropText={site.name.toLowerCase()}
      eyebrow="Software design and engineering"
      headline={"Software that\nkeeps its shape."}
      headlineAccent="keeps its shape."
      body="We design, build and run web platforms, mobile apps and the cloud systems underneath them, made to hold up long after launch day."
      primaryCta={{ label: "Start a project", href: "/contact" }}
      secondaryCta={{ label: "See our services", href: "/services" }}
      // keep the sculpture clear of the copy on phones
      mobileOverlap={0}
      ambient
      ambientIntensity={0.5}
      loadFonts={false}
      headingFont="var(--font-geist-sans), 'Helvetica Neue', Arial, sans-serif"
      accentFont="var(--font-instrument-serif), 'Times New Roman', serif"
      bodyFont="var(--font-geist-sans), 'Helvetica Neue', Arial, sans-serif"
      style={themedByCss}
    />
  )
}
