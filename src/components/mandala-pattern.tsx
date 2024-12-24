"use client"

import { useEffect, useRef } from 'react'

export function MandalaPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 800

    // Draw mandala pattern
    ctx.strokeStyle = '#90B390'
    ctx.lineWidth = 0.5

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 300

    // Create multiple circular patterns
    for (let i = 0; i < 360; i += 5) {
      const angle = (i * Math.PI) / 180
      const x1 = centerX + radius * Math.cos(angle)
      const y1 = centerY + radius * Math.sin(angle)

      for (let j = 0; j < 360; j += 60) {
        const innerAngle = (j * Math.PI) / 180
        const x2 = x1 + 30 * Math.cos(innerAngle)
        const y2 = y1 + 30 * Math.sin(innerAngle)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      style={{ maxWidth: '800px', maxHeight: '800px' }}
    />
  )
}

