"use client"

import * as React from "react"

type Point = {
  x: number
  y: number
  vx: number
  vy: number
}

export function NodesBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const animationRef = React.useRef<number | null>(null)
  const pointsRef = React.useRef<Point[]>([])
  const mouseRef = React.useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const dprRef = React.useRef<number>(1)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      dprRef.current = dpr
      const { innerWidth, innerHeight } = window
      canvas.width = Math.floor(innerWidth * dpr)
      canvas.height = Math.floor(innerHeight * dpr)
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      initPoints()
    }

    const initPoints = () => {
      const dpr = dprRef.current
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const density = Math.max(60, Math.min(120, Math.floor((width * height) / 18000)))
      const points: Point[] = []
      for (let i = 0; i < density; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        })
      }
      pointsRef.current = points
    }

    const getColor = (alpha: number) => {
      // Use CSS variables for theme-aware color
      const styles = getComputedStyle(document.documentElement)
      const gridHsl = styles.getPropertyValue("--grid-color") || "222 17% 75%"
      return `hsla(${gridHsl.trim()} / ${alpha})`
    }

    const step = () => {
      const dpr = dprRef.current
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)

      const points = pointsRef.current
      const mouse = mouseRef.current
      const nodeColor = getColor(0.5)
      const lineBaseAlpha = 0.18
      const nodeRadius = 2.2 * dpr
      const maxDistance = 140 * dpr
      const mouseInfluence = 180 * dpr

      // Update positions
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > width / dpr) p.vx *= -1
        if (p.y < 0 || p.y > height / dpr) p.vy *= -1
      }

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = (points[i].x - points[j].x) * dpr
          const dy = (points[i].y - points[j].y) * dpr
          const dist2 = dx * dx + dy * dy
          if (dist2 < maxDistance * maxDistance) {
            const alpha = lineBaseAlpha * (1 - Math.sqrt(dist2) / maxDistance)
            ctx.strokeStyle = getColor(alpha)
            ctx.lineWidth = 1 * dpr
            ctx.beginPath()
            ctx.moveTo(points[i].x * dpr, points[i].y * dpr)
            ctx.lineTo(points[j].x * dpr, points[j].y * dpr)
            ctx.stroke()
          }
        }
      }

      // Draw mouse connections
      if (mouse.active) {
        for (let i = 0; i < points.length; i++) {
          const dx = mouse.x - points[i].x * dpr
          const dy = mouse.y - points[i].y * dpr
          const dist2 = dx * dx + dy * dy
          if (dist2 < mouseInfluence * mouseInfluence) {
            const alpha = 0.2 * (1 - Math.sqrt(dist2) / mouseInfluence)
            ctx.strokeStyle = getColor(alpha)
            ctx.lineWidth = 1 * dpr
            ctx.beginPath()
            ctx.moveTo(points[i].x * dpr, points[i].y * dpr)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = nodeColor
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath()
        ctx.arc(points[i].x * dpr, points[i].y * dpr, nodeRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(step)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX * dprRef.current
      mouseRef.current.y = e.clientY * dprRef.current
      mouseRef.current.active = true
    }

    const onMouseLeave = () => {
      mouseRef.current.active = false
    }

    const onVisibility = () => {
      if (document.hidden) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      } else {
        if (!animationRef.current) animationRef.current = requestAnimationFrame(step)
      }
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("visibilitychange", onVisibility)

    resize()
    animationRef.current = requestAnimationFrame(step)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}


