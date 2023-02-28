import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import setupMockPlugin from "./mock";

const setupVitePlugins = (isBuild: boolean, env: ViteEnv) => {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  return plugins;
};

export default setupVitePlugins;
