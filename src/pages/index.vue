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

const pendingTasks: Function[] = []

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

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)

  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 10 - 5),
          theta: b.theta - 0.3 * Math.random(),
        },
        depth + 1,
      ),
    )
  }

  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 10 - 5),
          theta: b.theta + 0.3 * Math.random(),
        },
        depth + 1,
      ),
    )
  }
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach((fn) => fn())
}

let framesCount = 0
function startFrame() {
  // 根据 fps 绘制
  requestAnimationFrame((time) => {
    framesCount += 1
    if (framesCount % 3 === 0) frame()
    startFrame()
  })
}

startFrame()

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
