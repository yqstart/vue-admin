import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import setupMockPlugin from "./mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const setupVitePlugins = (isBuild: boolean, env: ViteEnv) => {
  const plugins: Plugin[] = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      dts: "types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      directoryAsNamespace: true,
      dts: "types/components.d.ts",
    }),
  ];
  plugins.push(setupMockPlugin(isBuild));
  return plugins;
};

export default setupVitePlugins;
