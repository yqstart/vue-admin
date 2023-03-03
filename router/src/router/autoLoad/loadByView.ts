import { RouteRecordRaw } from "vue-router"
import { env } from "@/utils"

const layouts = import.meta.glob("@/layouts/*.vue", { eager: true })
const views = import.meta.glob("@/views/**/*.vue", { eager: true })

const getRoutes = () => {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}
const getRouteByModule = (
  file: string,
  module: any,
  isChildren: boolean = false
) => {
  // const name = file.replace(/.+layouts\/|\.+views\/|\.vue/gi, '')
  const name = isChildren
    ? file.split("views/").pop()?.split(".")[0]
    : file.split("/").pop()?.split(".")[0]
  const route = {
    name: name?.replace("/", "."),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw
  return Object.assign(route, module.default?.route)
}
// 获取子路由
const getChildrenRoutes = (layoutRoute: RouteRecordRaw) => {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`/views/${layoutRoute.name as unknown as string}`)) {
      const route = getRouteByModule(file, module, true)
      routes.push(route)
    }
  })
  return routes
}
const routes = env.VITE_ROUTER_AUTO_LOAD
  ? getRoutes()
  : ([] as RouteRecordRaw[])
export default getRoutes
