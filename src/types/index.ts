export interface Point {
  x: number
  y: number
}

export interface Branch {
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
  width: number
}
