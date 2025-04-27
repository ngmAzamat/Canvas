export function drawGrid(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.moveTo(100 + i * 100, 0);
    context.lineTo(100 + i * 100, canvas.height);
    context.stroke();
    context.fillStyle = "black"; // Цвет текста
    context.font = "16px Arial"; // Размер и шрифт
    const a = i * 100 + 10;
    const b = canvas.height - 5;
    const c = a + b - canvas.height - 15 - 40 + 50 + "";
    context.fillText(c, a, b); // Текст, x, y
  }

  for (let i = 0; i < 6; i++) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.moveTo(0, 100 + i * 100);
    context.lineTo(canvas.width, 100 + i * 100);
    context.stroke();
    context.fillStyle = "black"; // Цвет текста
    context.font = "16px Arial"; // Размер и шрифт
    const a = 0 + 10;
    const b = i * 100 + 30;
    const d = canvas.height - b;
    const c: string = a + b - 40 + 50 + "";
    context.fillText(c, a, d); // Текст, x, y
  }
}
