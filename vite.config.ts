import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Unfonts({
      custom: {
        families: [
          {
            name: "SF",
            src: "./src/assets/fonts/SF-Pro-Text-Regular.otf",
          },
          {
            name: "SF-Bold",
            src: "./src/assets/fonts/SF-Pro-Text-Bold.otf",
          },
          {
            name: "SF-Medium",
            src: "./src/assets/fonts/SF-Pro-Text-Medium.otf",
          },
          {
            name: "SF-Semibold",
            src: "./src/assets/fonts/SF-Pro-Text-Semibold.otf",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
