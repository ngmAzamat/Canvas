import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // or .js if you're using JS
  format: ["esm"],
  target: "es2024", // modern browsers, or 'esnext' if you want latest
  sourcemap: false, // optional, useful for debugging
  dts: false, // set to true if you want .d.ts files (for TS libs)
  outDir: "dist", // customize as needed
  splitting: false, // enables code splitting for ESM
  clean: true, // clean dist before build
  minify: true, // optional, enable for production
});
