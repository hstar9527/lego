import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 引入 JSX 插件
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // 可选配置
      transformOn: false, // 是否转换 `on:` 开头的事件（默认 false）
      optimize: true, // 是否优化 JSX（默认 true）
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.imooc-lego.com/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
