import { triangle } from "./triangle.ts";
import { rectangle } from "./rectangle.ts";
import { texted } from "./text.ts";

let modal: any = document.getElementById("modal");
const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let context: CanvasRenderingContext2D = canvas.getContext("2d")!;

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
  let a7: any = document.getElementById("border");
  let a8: any = document.getElementById("background");
  let a9: any = document.getElementById("linewidth");

  let x1: number = a1.value;
  let x2: number = a2.value;
  let x3: number = a3.value;
  let y1: number = a4.value;
  let y2: number = a5.value;
  let y3: number = a6.value;
  let border: any = a7.value;
  let background: any = a8.value;
  let lineWidth: any = a9.value;
  triangle({
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    canvas,
    context,
    border,
    background,
    lineWidth,
  });
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
  let a3: any = document.getElementById("width2");
  let a4: any = document.getElementById("height2");
  let a5: any = document.getElementById("border2");
  let a6: any = document.getElementById("background2");
  let a7: any = document.getElementById("linewidth2");
  let x: number = a1.value;
  let y: number = a2.value;
  let width: number = a3.value;
  let height: number = a4.value;
  let border: string = a5.value;
  let background: string = a6.value;
  let lineWidth: number = a7.value;
  rectangle({
    x,
    y,
    width,
    height,
    canvas,
    context,
    border,
    background,
    lineWidth,
  });
});

let modal3: any = document.getElementById("modal3");

const y1 = document.getElementById("mobile3") as HTMLElement;
y1.addEventListener("click", () => {
  modal3.showModal();
});

const y2 = document.getElementById("closeModal3") as HTMLElement;
y2.addEventListener("click", () => {
  if (modal2) {
    modal3.close();
  }
});

let r = document.getElementById("button3") as HTMLElement;
r.addEventListener("click", () => {
  console.log("a");
  let a1: any = document.getElementById("newx");
  let a2: any = document.getElementById("newy");
  let a3: any = document.getElementById("text");
  let a4: any = document.getElementById("color");
  let a5: any = document.getElementById("fontSize");
  let a6: any = document.getElementById("fontFamily");
  let x: number = a1.value;
  let y: number = a2.value;
  let text: string = a3.value;
  let color: string = a4.value;
  let fontSize: number = a5.value;
  let fontFamily: string = a6.value;
  console.log("x");
  texted({ x, y, text, canvas, context, color, fontSize, fontFamily });
  console.log("z");
});
