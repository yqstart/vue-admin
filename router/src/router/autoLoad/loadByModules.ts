import { RouteRecordRaw } from "vue-router"
import {Component} from "vue";
const loadByModules = () => {
  const modules: Component = import.meta.glob("../modules/**/*.ts", { eager: true })
  const routes: RouteRecordRaw[] = []
  Object.keys(modules).forEach(key => {
    routes.push(modules[key].default)
  })
  return routes
}

export default loadByModules
