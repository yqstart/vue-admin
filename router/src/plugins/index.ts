import { App, Component } from "vue"
import setupTailwind from "@/plugins/tailwindcss"
import setupElement from "./elementui"
import setupPinia from "./pinia"

const setupPlugins = (app: App) => {
  autoRegisterComponent(app)
  setupElement(app)
  setupPinia(app)
  setupTailwind()
}

const autoRegisterComponent = (app: App) => {
  const components: Component = import.meta.glob("@/components/form/*.vue", {
    eager: true
  })
  Object.keys(components).forEach(key => {
    const name = key.split("/").pop()?.split(".").shift() as string
    app.component(name, components[key].default)
  })
}

export default setupPlugins
