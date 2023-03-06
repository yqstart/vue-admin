import { CacheEnum } from "@/enum/cacheEnum";
import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";
import { ref } from "vue";
import { IMenu } from "#/menu";
import { defineStore } from "pinia";
import router from "@/router";

export const useMenuStore = defineStore(
  "menuStore",
  () => {
    const menu = ref<IMenu[]>([]);

    const historyMenu = ref<IMenu[]>([]);

    const close = ref(false);

    const getMenus = () => {
      // 根据路由获取菜单
      menu.value = router
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
    };

    const setCurrentMenu = (route: RouteLocationNormalizedLoaded) => {
      menu.value.forEach((item) => {
        item.isCheck = false;
        item.children?.forEach((child) => {
          child.isCheck = false;
          if (child.route === route.name) {
            item.isCheck = true;
            child.isCheck = true;
          }
        });
      });
    };

    const removeHistoryMenu = (menu: IMenu) => {
      const index = historyMenu.value.indexOf(menu);
      historyMenu.value.splice(index, 1);
    };

    const addHistoryMenu = (route: RouteLocationNormalized) => {
      if (!route.meta?.menu) return;
      const historyMe: IMenu = { ...route.meta?.menu, route: route.name };
      const isHas = historyMenu.value.some((item) => item.route === route.name);
      if (!isHas) {
        historyMenu.value.unshift(historyMe);
      }
      if (historyMenu.value.length > 10) {
        historyMenu.value.pop();
      }
    };

    return {
      menu,
      historyMenu,
      close,
      getMenus,
      addHistoryMenu,
      removeHistoryMenu,
      setCurrentMenu,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: CacheEnum.HISTORY_MENU,
          storage: localStorage,
          paths: ["historyMenu"],
        },
      ],
    },
  }
);
