"use client"

import { useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

function read(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributeFilter: ["class"] })
  return () => observer.disconnect()
}

/** The <html> class is the single source of truth for the theme. */
export function useTheme() {
  return useSyncExternalStore<Theme>(subscribe, read, () => "light")
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem("theme", theme)
  } catch {
    // storage blocked: the choice lasts for this page only
  }
}

/** React's dev-only Strict Mode remount clears the class the head script set. */
export function reapplyStoredTheme() {
  try {
    if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark")
  } catch {}
}
