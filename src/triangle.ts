export function triangle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  border: string,
  background: string,
  lineWidth: number
) {
  let newY1 = y1 * -1 + canvas.height;
  let newY2 = y2 * -1 + canvas.height;
  let newY3 = y3 * -1 + canvas.height;
  context.beginPath();
  context.strokeStyle = border;
  context.lineWidth = lineWidth;
  context.moveTo(x1, newY1);
  context.lineTo(x2, newY2);
  context.lineTo(x3, newY3);
  context.lineTo(x1, newY1);
  context.closePath();
  context.fillStyle = background;
  context.stroke();
  context.fill();
}
