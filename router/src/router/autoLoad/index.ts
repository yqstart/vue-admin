import { RouteRecordRaw } from "vue-router"
import utils from "@/utils"
import getRoutes from "./loadByView"
import loadByModules from "./loadByModules"

let routes = [] as RouteRecordRaw[]

if (utils.env.VITE_ROUTER_AUTO_LOAD) {
  routes = getRoutes()
} else {
  routes = loadByModules()
}

export default routes
