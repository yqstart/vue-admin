import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";

const layouts = import.meta.glob("@/layouts/*.vue");
const views = import.meta.glob("@/views/**/*.vue");

const getRoutes = () => {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
};
const getRouteByModule = (
  file: string,
  module: Component,
  isChildren: boolean = false
) => {
  // const name = file.replace(/.+layouts\/|\.+views\/|\.vue/gi, '')
  const name = isChildren
    ? file.split("views/").pop()?.split(".")[0]
    : file.split("/").pop()?.split(".")[0];
  const route = {
    name: name?.replace("/", "."),
    path: `/${name}`,
    component: module,
  } as RouteRecordRaw;
  return route;
};
// 获取子路由
const getChildrenRoutes = (layoutRoute: RouteRecordRaw) => {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`/views/${layoutRoute.name as unknown as string}`)) {
      const route = getRouteByModule(file, module, true);
      routes.push(route);
    }
  });
  return routes;
};
export default getRoutes();
