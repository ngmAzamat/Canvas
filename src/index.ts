import { drawGrid } from "./drawGrid.ts";
import { All } from "./onKeyDown.ts";
// import "boxicons";

const canvas: any = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 550;
drawGrid(context, canvas);
All(canvas, context);
