import { RouteRecordRaw } from "vue-router"
import { env } from "@/utils"
import getRoutes from "./loadByView"
import loadByModules from "./loadByModules"

let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTER_AUTO_LOAD) {
  routes = getRoutes()
} else {
  routes = loadByModules()
}

export default routes
