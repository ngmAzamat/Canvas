export function coordMathToCanvas(y: number, canvas: HTMLCanvasElement) {
  return y * -1 + canvas.height;
}
