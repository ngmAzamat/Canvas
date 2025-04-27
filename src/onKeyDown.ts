import { triangle } from "./triangle.ts";
import { rectangle } from "./rectangle.ts";
import { texted } from "./text.ts";

const modal = document.getElementById("modal") as HTMLDialogElement;
const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

export function All() {
  document.addEventListener("keydown", onKeyDown);
  function onKeyDown(event: KeyboardEvent) {
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

const a: HTMLElement = document.getElementById("closeModal")!;
a.addEventListener("click", () => {
  if (modal) {
    modal.close();
  }
});

const b: HTMLElement = document.getElementById("button")!;
b.addEventListener("click", () => {
  const a1 = document.getElementById("x1") as HTMLInputElement;
  const a2 = document.getElementById("x2") as HTMLInputElement;
  const a3 = document.getElementById("x3") as HTMLInputElement;
  const a4 = document.getElementById("y1") as HTMLInputElement;
  const a5 = document.getElementById("y2") as HTMLInputElement;
  const a6 = document.getElementById("y3") as HTMLInputElement;
  const a7 = document.getElementById("border") as HTMLInputElement;
  const a8 = document.getElementById("background") as HTMLInputElement;
  const a9 = document.getElementById("linewidth") as HTMLInputElement;

  const x1: number = Number(a1.value);
  const x2: number = Number(a2.value);
  const x3: number = Number(a3.value);
  const y1: number = Number(a4.value);
  const y2: number = Number(a5.value);
  const y3: number = Number(a6.value);
  const border: string = a7.value;
  const background: string = a8.value;
  const lineWidth: number = Number(a9.value);
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

const modal2 = document.getElementById("modal2") as HTMLDialogElement;

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

const z = document.getElementById("button2") as HTMLElement;
z.addEventListener("click", () => {
  console.log("a");
  const a1 = document.getElementById("x") as HTMLInputElement;
  const a2 = document.getElementById("y") as HTMLInputElement;
  const a3 = document.getElementById("width2") as HTMLInputElement;
  const a4 = document.getElementById("height2") as HTMLInputElement;
  const a5 = document.getElementById("border2") as HTMLInputElement;
  const a6 = document.getElementById("background2") as HTMLInputElement;
  const a7 = document.getElementById("linewidth2") as HTMLInputElement;
  const x: number = Number(a1.value);
  const y: number = Number(a2.value);
  const width: number = Number(a3.value);
  const height: number = Number(a4.value);
  const border: string = a5.value;
  const background: string = a6.value;
  const lineWidth: number = Number(a7.value);
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

const modal3 = document.getElementById("modal3") as HTMLDialogElement;

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

const r = document.getElementById("button3") as HTMLElement;
r.addEventListener("click", () => {
  console.log("a");
  const a1 = document.getElementById("newx") as HTMLInputElement;
  const a2 = document.getElementById("newy") as HTMLInputElement;
  const a3 = document.getElementById("text") as HTMLInputElement;
  const a4 = document.getElementById("color") as HTMLInputElement;
  const a5 = document.getElementById("fontSize") as HTMLInputElement;
  const a6 = document.getElementById("fontFamily") as HTMLInputElement;
  const x: number = Number(a1.value);
  const y: number = Number(a2.value);
  const text: string = a3.value;
  const color: string = a4.value;
  const fontSize: number = Number(a5.value);
  const fontFamily: string = a6.value;
  console.log("x");
  texted({ x, y, text, canvas, context, color, fontSize, fontFamily });
  console.log("z");
});
