// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// import { metaImagesPlugin } from "./vite-plugin-meta-images.ts";

// export default defineConfig({
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     tailwindcss(),
//     metaImagesPlugin(),
//     ...(process.env.NODE_ENV !== "production" &&
//     process.env.REPL_ID !== undefined
//       ? [
//           await import("@replit/vite-plugin-cartographer").then((m) =>
//             m.cartographer(),
//           ),
//           await import("@replit/vite-plugin-dev-banner").then((m) =>
//             m.devBanner(),
//           ),
//         ]
//       : []),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   css: {
//     postcss: {
//       plugins: [],
//     },
//   },
//   root: path.resolve(import.meta.dirname, "client"),
//   build: {
//     outDir: path.resolve(import.meta.dirname, "dist/public"),
//     emptyOutDir: true,
//   },
//   server: {
//     host: "0.0.0.0",
//     allowedHosts: true,
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });

import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images.ts";

function getDevPlugins(): Plugin[] {
  // only load dev plugins in REPL and non-production
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    // require() works here because this code runs during config parsing
    const cartographer = require("@replit/vite-plugin-cartographer").cartographer();
    const devBanner = require("@replit/vite-plugin-dev-banner").devBanner();
    return [cartographer, devBanner];
  }
  return [];
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...getDevPlugins(),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./client/src"),
      "@shared": path.resolve("./shared"),
      "@assets": path.resolve("./attached_assets"),
    },
  },
  css: { postcss: { plugins: [] } },
  root: path.resolve("./client"),
  build: {
    outDir: path.resolve("./dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: { strict: true, deny: ["**/.*"] },
  },
});
