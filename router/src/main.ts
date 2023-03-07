import { createApp } from "vue";
import router, { setupRouter } from "@/router";
import App from "./App.vue";
import setupPlugins from "@/plugins";
import "@/style/global.scss";
import "element-plus/dist/index.css"
import 'animate.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@icon-park/vue-next/styles/index.css';

const init = async () => {
  const app = createApp(App);
  setupPlugins(app);
  await setupRouter(app);
  // 定义异步，路由处理完成再挂载组件
  await router.isReady();
  app.mount("#app");
};

init().then((r) => {});
