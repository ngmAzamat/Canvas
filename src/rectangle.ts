import { coordMathToCanvas } from "./coordMathToCanvas";

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  border: string;
  background: string;
  lineWidth: number;
};

export function rectangle(t: Rectangle) {
  // Задаем цвет заливки
  t.context.lineWidth = t.lineWidth;
  t.context.strokeStyle = t.border;
  t.context.fillStyle = t.background;

  // Рисуем прямоугольник: (x, y, width, height)
  const a = coordMathToCanvas(t.y, t.canvas);
  t.context.fillRect(t.x, a, t.width, t.height * -1);
  t.context.strokeRect(t.x, a, t.width, t.height * -1);
}
