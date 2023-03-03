import { RouteRecordRaw } from "vue-router"
const loadByModules = () => {
  const modules = import.meta.glob("../modules/**/*.ts", { eager: true })
  const routes: RouteRecordRaw[] = []
  Object.keys(modules).forEach(key => {
    routes.push(modules[key].default)
  })
  return routes
}

export default loadByModules
