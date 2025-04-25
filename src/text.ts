export function text(
  x: number,
  y: number,
  text: any,
  canvas: any,
  context: any,
  color: any
) {
  context.fillStyle = color;
  context.font = "16px Arial"; // Можно изменить на любой шрифт
  context.fillText(text, x, y);
}
