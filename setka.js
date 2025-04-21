const canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 550;

let modal = document.getElementById("modal");

document.addEventListener("keydown", (event) => {
  const isCtrlPressed = event.ctrlKey;

  if (isCtrlPressed && event.key === "m") {
    modal.showModal(); // ура я сам все вспомнил как это делал
  }
});
document.getElementById("closeModal").addEventListener("click", () => {
  if (modal) {
    modal.close();
  }
});
document.getElementById("button").addEventListener("click", () => {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let x3 = document.getElementById("x3").value;
  let y1 = document.getElementById("y1").value;
  let y2 = document.getElementById("y2").value;
  let y3 = document.getElementById("y3").value;
  trugolnik(x1, y1, x2, y2, x3, y3);
});

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
  let c = a + b - canvas.height - 15 + "";
  context.fillText(c - 40 + 50 + "", a, b); // Текст, x, y
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
  let c = a + b + "";
  context.fillText(c - 40 + 50 + "", a, d); // Текст, x, y
}

function trugolnik(x1, y1, x2, y2, x3, y3) {
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
