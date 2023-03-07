import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import setupMockPlugin from "./mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const setupVitePlugins = (isBuild: boolean, env: ViteEnv) => {
  const plugins: Plugin[] = [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ];
  plugins.push(setupMockPlugin(isBuild));
  return plugins;
};

export default setupVitePlugins;
