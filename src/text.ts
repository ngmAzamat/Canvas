export function texted(
  x: number,
  y: number,
  text: string,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  color: string
) {
  let newX = x;
  let newY = y * -1 + canvas.height;
  context.fillStyle = color;
  context.font = "16px Arial"; // Можно изменить на любой шрифт
  context.fillText(text, newX, newY);
}
