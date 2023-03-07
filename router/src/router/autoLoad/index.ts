import { Router, RouteRecordRaw } from "vue-router";
import utils from "@/utils";
import getRoutes from "./loadByView";
import loadByModules from "./loadByModules";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

let routes: RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTO_LOAD
  ? getRoutes()
  : loadByModules();

const autoLoad = (router: Router) => {
  const { info } = storeToRefs(useUserStore());
  // 权限过滤
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? info.value?.permissions.includes(permission) : true;
    });
    return route;
  });

  routes.forEach((route) => {
    router.addRoute(route);
  });
};
export default autoLoad;
