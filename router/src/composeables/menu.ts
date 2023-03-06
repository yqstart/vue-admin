import { ref } from "vue";
import { IMenu } from "#/menu";
import router from "@/router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
import { RouteLocationNormalizedLoaded } from "vue-router";

class Menu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);

  constructor() {
    this.menus.value = this.getMenus();
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? [];
  }

  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((item) => {
      item.isCheck = false;
      item.children?.forEach((child) => {
        if (child.route === route.name) {
          item.isCheck = true;
          child.isCheck = true;
        }
      });
    });
  }

  getMenus() {
    // 根据路由获取菜单
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((item) => {
        const menuItem: IMenu = { ...item.meta.menu };
        menuItem.children = item.children
          .filter((child) => child.meta?.menu)
          .map((route) => {
            return { ...route.meta?.menu, route: route.name };
          });
        return menuItem;
      })
      .filter((item) => item.children?.length);
  }
}

export default new Menu();
