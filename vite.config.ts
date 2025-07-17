import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath, URL } from "node:url";
import cesium from "vite-plugin-cesium";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          })
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          })
        ],
      }),
      cesium()
    ],
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
          },
        },
      },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      cors: true,
      proxy: {
        [config.VITE_BASE_URL]: {
          target: config.VITE_BACK_END_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/be/, ""),
        },
      },
    },
  };
});
