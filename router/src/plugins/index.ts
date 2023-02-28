import { App } from "vue";
import setupTailwind from "@/plugins/tailwindcss";

const setupPlugins = (app: App) => {
    setupTailwind()
};

export default setupPlugins;
