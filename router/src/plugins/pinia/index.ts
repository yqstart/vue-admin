import { createPinia } from "pinia"
import { App } from "vue"

const setupPinia = (app: App) => {
  app.use(createPinia())
}

export default setupPinia
