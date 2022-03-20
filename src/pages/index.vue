<script setup lang="ts">
const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext("2d")!)

const WIDTH = $ref(600)
const Height = $ref(600)

interface Point {
  x: number
  y: number
}

interface Branch {
  /**
   * 起点
   */
  start: Point
  /**
   * 线长
   */
  length: number
  /**
   * 夹角
   */
  theta: number
  /**
   * 线宽
   */
  width?: number
}

function init() {
  ctx.strokeStyle = "rgba(169, 169, 169, 0.8)"

  step({
    start: {
      x: WIDTH / 2,
      y: Height,
    },
    length: 50,
    theta: -Math.PI / 2,
  })
}

function lineTo(p1: Point, p2: Point) {
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.stroke()
}

function step(b: Branch) {
  const end = getEndPoint(b)
  drawBranch(b)

  if (Math.random() < 0.5) {
    step({
      start: end,
      length: b.length,
      theta: b.theta - 0.2,
    })
  }

  if (Math.random() < 0.5) {
    step({
      start: end,
      length: b.length,
      theta: b.theta + 0.2,
    })
  }
}

function getEndPoint(b: Branch) {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta),
  }
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

onMounted(() => {
  init()
})
</script>

<template>
  <canvas ref="el" width="600" height="600" border />
</template>

<style scoped></style>
