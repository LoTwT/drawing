<script setup lang="ts">
import { Branch } from "~/types"
import { getEndPoint, drawBranch } from "~/utils/canvas"
import { startFrame } from "~/utils/frame"

const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext("2d")!)

const WIDTH = $ref(600)
const Height = $ref(600)

const startBranch: Branch = $ref({
  start: {
    x: WIDTH / 2,
    y: Height,
  },
  length: Math.random() * 10 + 20,
  theta: -Math.PI / 2,
  width: Math.random() + 1,
})

const pendingTasks: Function[] = []

function init() {
  ctx.strokeStyle = "rgba(169, 169, 169, 0.8)"
  ctx.lineWidth = startBranch.width
  step(startBranch)
}

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(ctx, b)

  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 10 - 5),
          theta: b.theta - 0.3 * Math.random(),
          width: b.width,
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
          width: b.width,
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

startFrame(frame)

onMounted(() => {
  init()
})
</script>

<template>
  <div w-full h-full flex justify-center items-center>
    <canvas ref="el" width="600" height="600" border />
  </div>
</template>

<style scoped></style>
