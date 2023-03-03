import { defineStore } from "pinia"
import { ref } from "vue"
import { RouteRecordNormalized, useRouter } from "vue-router"

export const useRouterStore = defineStore("routerStore", () => {
  const getRoutes = () => {
    const arr: RouteRecordNormalized[] = useRouter()
      .getRoutes()
      .filter(route => route.children.length && route.meta.show)
      .map(item => {
        item.children = item.children.filter(child => child.meta?.show)
        return item
      })
      .filter(item => item.children.length)
    return arr
  }
  const routes = getRoutes()

  return { routes, getRoutes }
})
