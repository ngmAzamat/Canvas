// export function drawGrid(context, canvas) {
//   for (let i = 0; i < 11; i++) {
//     context.beginPath();
//     context.strokeStyle = "black";
//     context.lineWidth = "2";
//     context.moveTo(100 + i * 100, 0);
//     context.lineTo(100 + i * 100, canvas.height);
//     context.stroke();
//     context.fillStyle = "black"; // Цвет текста
//     context.font = "16px Arial"; // Размер и шрифт
//     let a = i * 100 + 10;
//     let b = canvas.height - 5;
//     let c = a + b - canvas.height - 15 + "";
//     context.fillText(c - 40 + 50 + "", a, b); // Текст, x, y
//   }

//   for (let i = 0; i < 6; i++) {
//     context.beginPath();
//     context.strokeStyle = "black";
//     context.lineWidth = "2";
//     context.moveTo(0, 100 + i * 100);
//     context.lineTo(canvas.width, 100 + i * 100);
//     context.stroke();
//     context.fillStyle = "black"; // Цвет текста
//     context.font = "16px Arial"; // Размер и шрифт
//     let a = 0 + 10;
//     let b = i * 100 + 30;
//     let d = canvas.height - b;
//     let c = a + b + "";
//     context.fillText(c - 40 + 50 + "", a, d); // Текст, x, y
//   }
// }

export function drawGrid(context: any, canvas: any) {
  for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "2";
    context.moveTo(100 + i * 100, 0);
    context.lineTo(100 + i * 100, canvas.height);
    context.stroke();
    context.fillStyle = "black"; // Цвет текста
    context.font = "16px Arial"; // Размер и шрифт
    let a = i * 100 + 10;
    let b = canvas.height - 5;
    let c = a + b - canvas.height - 15 - 40 + 50 + "";
    context.fillText(c, a, b); // Текст, x, y
  }

  for (let i = 0; i < 6; i++) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "2";
    context.moveTo(0, 100 + i * 100);
    context.lineTo(canvas.width, 100 + i * 100);
    context.stroke();
    context.fillStyle = "black"; // Цвет текста
    context.font = "16px Arial"; // Размер и шрифт
    let a = 0 + 10;
    let b = i * 100 + 30;
    let d = canvas.height - b;
    let c: string = a + b - 40 + 50 + "";
    context.fillText(c, a, d); // Текст, x, y
  }
}
