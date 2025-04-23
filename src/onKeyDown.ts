import { triangle } from "./triangle.ts";

let modal: any = document.getElementById("modal");

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

// import { triangle } from "./triangle.js";

// let modal: any = document.getElementById("modal");

// export function All(canvas: any, context: any) {
//   document.addEventListener("keydown", onKeyDown);
//   function onKeyDown(event: any) {
//     const isCtrlPressed = event.ctrlKey;

//     if (isCtrlPressed && event.key === "m") {
//       modal.showModal(); // ура я сам все вспомнил как это делал
//     }
//   }
//   let a: any = document.getElementById("closeModal");
//   a.addEventListener("click", () => {
//     if (modal) {
//       modal.close();
//     }
//   });
//   let b: any = document.getElementById("button");
//   b.addEventListener("click", () => {
//     let a1: any = document.getElementById("x1");
//     let a2: any = document.getElementById("x2");
//     let a3: any = document.getElementById("x3");
//     let a4: any = document.getElementById("y1");
//     let a5: any = document.getElementById("y2");
//     let a6: any = document.getElementById("y3");

//     let x1: number = a1.value;
//     let x2: number = a2.value;
//     let x3: number = a3.value;
//     let y1: number = a4.value;
//     let y2: number = a5.value;
//     let y3: number = a6.value;
//     triangle(x1, y1, x2, y2, x3, y3, canvas, context);
//   });
// }
