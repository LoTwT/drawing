import { Point, Branch } from "~/types"

export function lineTo(ctx: CanvasRenderingContext2D, p1: Point, p2: Point) {
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.stroke()
}

export function getEndPoint(b: Branch) {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta),
  }
}

export function drawBranch(ctx: CanvasRenderingContext2D, b: Branch) {
  lineTo(ctx, b.start, getEndPoint(b))
}
