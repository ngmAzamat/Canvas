import { triangle } from "./triangle.ts";
import { rectangle } from "./rectangle.ts";

let modal: any = document.getElementById("modal");
const canvas: any = document.querySelector("canvas");
let context = canvas.getContext("2d");

export function All(canvas: any, context: any) {
  document.addEventListener("keydown", onKeyDown);
  function onKeyDown(event: any) {
    const isCtrlPressed = event.ctrlKey;

    if (isCtrlPressed && event.key === "m") {
      modal.showModal(); // ура я сам все вспомнил как это делал
    }
  }
}

const c = document.getElementById("mobile") as HTMLElement;
c.addEventListener("click", () => {
  modal.showModal();
});

let a: any = document.getElementById("closeModal");
a.addEventListener("click", () => {
  if (modal) {
    modal.close();
  }
});

let b: any = document.getElementById("button");
b.addEventListener("click", () => {
  let a1: any = document.getElementById("x1");
  let a2: any = document.getElementById("x2");
  let a3: any = document.getElementById("x3");
  let a4: any = document.getElementById("y1");
  let a5: any = document.getElementById("y2");
  let a6: any = document.getElementById("y3");

  let x1: number = a1.value;
  let x2: number = a2.value;
  let x3: number = a3.value;
  let y1: number = a4.value;
  let y2: number = a5.value;
  let y3: number = a6.value;
  triangle(x1, y1, x2, y2, x3, y3, canvas, context);
});

let modal2: any = document.getElementById("modal2");

const d = document.getElementById("mobile2") as HTMLElement;
d.addEventListener("click", () => {
  modal2.showModal();
});

const e = document.getElementById("closeModal2") as HTMLElement;
e.addEventListener("click", () => {
  if (modal2) {
    modal2.close();
  }
});

let z = document.getElementById("button2") as HTMLElement;
z.addEventListener("click", () => {
  console.log("a");
  let a1: any = document.getElementById("x");
  let a2: any = document.getElementById("y");
  let a3: any = document.getElementById("width");
  let a4: any = document.getElementById("height");

  let x: number = a1.value;
  let y: number = a2.value;
  let width: number = a3.value;
  let height: number = a4.value;
  rectangle(x, y, width, height, canvas, context);
});
