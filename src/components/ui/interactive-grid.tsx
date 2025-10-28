"use client"

import * as React from "react"

export function InteractiveGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5] transition-opacity duration-500 [mask-image:radial-gradient(65%_60%_at_50%_35%,#000_60%,transparent_100%)] dark:opacity-[0.6]"
    >
      <div className="absolute inset-0 bg-background/0 [background-image:linear-gradient(to_right,hsla(var(--grid-color)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--grid-color)/0.08)_1px,transparent_1px)],[background-size:40px_40px,40px_40px] animate-grid-pan" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(var(--primary)/0.15)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,hsla(var(--primary)/0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsla(var(--accent-teal)/0.2)_0%,transparent_55%)]" />
    </div>
  )
}


