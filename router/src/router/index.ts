import { createRouter, createWebHistory } from "vue-router"
import { App } from "vue"
import routes from "./routes"
import layoutRoutes from "@/router/autoLoad"
import guard from "./guard"

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes]
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
