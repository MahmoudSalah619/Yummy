// vite.config.ts
import { defineConfig } from "file:///D:/Bit68/ardi-seller/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Bit68/ardi-seller/node_modules/@vitejs/plugin-react-swc/index.mjs";
import tsconfigPaths from "file:///D:/Bit68/ardi-seller/node_modules/vite-tsconfig-paths/dist/index.mjs";
import Unfonts from "file:///D:/Bit68/ardi-seller/node_modules/unplugin-fonts/dist/vite.mjs";
var vite_config_default = defineConfig({
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
          { name: "G-normal", src: "./src/assets/fonts/Gotham-Book.otf" },
          { name: "G-thin", src: "./src/assets/fonts/Gotham-Thin.otf" },
          { name: "G-medium", src: "./src/assets/fonts/Gotham-Medium.otf" },
          { name: "G-bold", src: "./src/assets/fonts/Gotham-Bold.otf" },
          { name: "G-black", src: "./src/assets/fonts/Gotham-Black.otf" },
          { name: "N-light", src: "./src/assets/fonts/NeueMachina-Light.otf" },
          {
            name: "N-regular",
            src: "./src/assets/fonts/NeueMachina-Regular.otf",
          },
          {
            name: "N-ultraBold",
            src: "./src/assets/fonts/NeueMachina-Ultrabold.otf",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCaXQ2OFxcXFxhcmRpLXNlbGxlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQml0NjhcXFxcYXJkaS1zZWxsZXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0JpdDY4L2FyZGktc2VsbGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuaW1wb3J0IFVuZm9udHMgZnJvbSBcInVucGx1Z2luLWZvbnRzL3ZpdGVcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBVbmZvbnRzKHtcbiAgICAgIGN1c3RvbToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU0ZcIixcbiAgICAgICAgICAgIHNyYzogXCIuL3NyYy9hc3NldHMvZm9udHMvU0YtUHJvLVRleHQtUmVndWxhci5vdGZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHLW5vcm1hbFwiLCBzcmM6IFwiLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1Cb29rLm90ZlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkctdGhpblwiLCBzcmM6IFwiLi9zcmMvYXNzZXRzL2ZvbnRzL0dvdGhhbS1UaGluLm90ZlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkctbWVkaXVtXCIsIHNyYzogXCIuL3NyYy9hc3NldHMvZm9udHMvR290aGFtLU1lZGl1bS5vdGZcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHLWJvbGRcIiwgc3JjOiBcIi4vc3JjL2Fzc2V0cy9mb250cy9Hb3RoYW0tQm9sZC5vdGZcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJHLWJsYWNrXCIsIHNyYzogXCIuL3NyYy9hc3NldHMvZm9udHMvR290aGFtLUJsYWNrLm90ZlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIk4tbGlnaHRcIiwgc3JjOiBcIi4vc3JjL2Fzc2V0cy9mb250cy9OZXVlTWFjaGluYS1MaWdodC5vdGZcIiB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTi1yZWd1bGFyXCIsXG4gICAgICAgICAgICBzcmM6IFwiLi9zcmMvYXNzZXRzL2ZvbnRzL05ldWVNYWNoaW5hLVJlZ3VsYXIub3RmXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk4tdWx0cmFCb2xkXCIsXG4gICAgICAgICAgICBzcmM6IFwiLi9zcmMvYXNzZXRzL2ZvbnRzL05ldWVNYWNoaW5hLVVsdHJhYm9sZC5vdGZcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxTQUFTLG9CQUFvQjtBQUNqUixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBR3BCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0EsRUFBRSxNQUFNLFlBQVksS0FBSyxxQ0FBcUM7QUFBQSxVQUM5RCxFQUFFLE1BQU0sVUFBVSxLQUFLLHFDQUFxQztBQUFBLFVBQzVELEVBQUUsTUFBTSxZQUFZLEtBQUssdUNBQXVDO0FBQUEsVUFDaEUsRUFBRSxNQUFNLFVBQVUsS0FBSyxxQ0FBcUM7QUFBQSxVQUM1RCxFQUFFLE1BQU0sV0FBVyxLQUFLLHNDQUFzQztBQUFBLFVBQzlELEVBQUUsTUFBTSxXQUFXLEtBQUssMkNBQTJDO0FBQUEsVUFDbkU7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
