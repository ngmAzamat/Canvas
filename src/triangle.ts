export function triangle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  canvas: any,
  context: any
) {
  let newY1 = y1 * -1 + canvas.height;
  let newY2 = y2 * -1 + canvas.height;
  let newY3 = y3 * -1 + canvas.height;
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = "5";
  context.moveTo(x1, newY1);
  context.lineTo(x2, newY2);
  context.lineTo(x3, newY3);
  context.lineTo(x1, newY1);
  context.closePath();
  context.stroke();
}

// export function triangle(x1, y1, x2, y2, x3, y3, canvas, context) {
//   let newY1 = y1 * -1 + canvas.height;
//   let newY2 = y2 * -1 + canvas.height;
//   let newY3 = y3 * -1 + canvas.height;
//   context.beginPath();
//   context.strokeStyle = "red";
//   context.lineWidth = "5";
//   context.moveTo(x1, newY1);
//   context.lineTo(x2, newY2);
//   context.lineTo(x3, newY3);
//   context.lineTo(x1, newY1);
//   context.closePath();
//   context.stroke();
// }
