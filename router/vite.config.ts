import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import parseEnv from "./vite/utils";
import * as process from "process";
import setupVitePlugins from "./vite/plugins";
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build";
  const root = process.cwd();
  // 提取配置文件
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias,
    },
  };
};
