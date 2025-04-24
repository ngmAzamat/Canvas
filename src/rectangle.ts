export function rectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  canvas: any,
  context: any
) {
  // Задаем цвет заливки
  context.strokeStyle = "blue";

  // Рисуем прямоугольник: (x, y, width, height)
  context.fillRect(x, y * -1 + canvas.height, width, height * -1);
}
