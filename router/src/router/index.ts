import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import layoutRoutes from "@/router/autoLoad";
import guard from "./guard";
import { useUserStore } from "@/store/user";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export async function setupRouter(app: App) {
  const { getUserInfo } = useUserStore();
  await getUserInfo();
  layoutRoutes(router);
  guard(router);
  app.use(router);
}
export default router;
