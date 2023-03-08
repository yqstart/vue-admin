import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import parseEnv from "./vite/utils";
import * as process from "process";
import setupVitePlugins from "./vite/plugins";
import { visualizer } from "rollup-plugin-visualizer";
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build";
  const root = process.cwd();
  // 提取配置文件
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [setupVitePlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\api/, '')
        }
      }
    }
  };
};
