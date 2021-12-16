import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "narutoSelector",
        fileName: "naruto-selector"
      }
    }
  };
});
