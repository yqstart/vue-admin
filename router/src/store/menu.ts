import { ref } from "vue"
import { IMenu } from "#/menu"
import { defineStore } from "pinia"
import router from "@/router"

export const useMenuStore = defineStore("menuStore", () => {
  const menu = ref<IMenu[]>([])

  const getMenus = () => {
    // 根据路由获取菜单
    menu.value = router
      .getRoutes()
      .filter(route => route.children.length && route.meta.menu)
      .map(item => {
        const menuItem: IMenu = { ...item.meta.menu }
        menuItem.children = item.children
          .filter(child => child.meta?.menu)
          .map(route => {
            return { ...route.meta?.menu, route: route.name }
          })
        return menuItem
      })
      .filter(item => item.children?.length)
  }

  return { menu, getMenus }
})
