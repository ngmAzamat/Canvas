import { coordMathToCanvas } from "./coordMathToCanvas";

type Texted = {
  x: number;
  y: number;
  text: string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  color: string;
  fontSize: number;
  fontFamily: string;
};

export function texted(t: Texted) {
  let newX = t.x;
  let newY = coordMathToCanvas(t.y, t.canvas);
  t.context.fillStyle = t.color;
  // t.context.font = "16px Arial"; // Можно изменить на любой шрифт
  t.context.font = `${t.fontSize}px ${t.fontFamily}`;
  t.context.fillText(t.text, newX, newY);
}
