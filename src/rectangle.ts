export function rectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  canvas: any,
  context: any,
  border: any,
  background: any,
  lineWidth: number
) {
  // Задаем цвет заливки
  context.lineWidth = lineWidth;
  context.strokeStyle = border;
  context.fillStyle = background;

  // Рисуем прямоугольник: (x, y, width, height)
  context.fillRect(x, y * -1 + canvas.height, width, height * -1);
  context.strokeRect(x, y * -1 + canvas.height, width, height * -1);
}
