import { coordMathToCanvas } from "./coordMathToCanvas";
type Triangle = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  border: string;
  background: string;
  lineWidth: number;
};

export function triangle(t: Triangle) {
  const newY1 = coordMathToCanvas(t.y1, t.canvas);
  const newY2 = coordMathToCanvas(t.y2, t.canvas);
  const newY3 = coordMathToCanvas(t.y3, t.canvas);
  t.context.beginPath();
  t.context.strokeStyle = t.border;
  t.context.lineWidth = t.lineWidth;
  t.context.moveTo(t.x1, newY1);
  t.context.lineTo(t.x2, newY2);
  t.context.lineTo(t.x3, newY3);
  t.context.lineTo(t.x1, newY1);
  t.context.closePath();
  t.context.fillStyle = t.background;
  t.context.stroke();
  t.context.fill();
}
