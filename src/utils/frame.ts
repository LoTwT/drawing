let framesCount = $ref(0)

export function startFrame(cb: Function) {
  // 根据 fps 绘制
  requestAnimationFrame(() => {
    framesCount += 1
    if (framesCount % 3 === 0) cb()
    startFrame(cb)
  })
}
