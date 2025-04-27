import { drawGrid } from "./drawGrid.ts";
import { All } from "./onKeyDown.ts";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.width = 1050;
canvas.height = 550;
drawGrid(context, canvas);
All();
