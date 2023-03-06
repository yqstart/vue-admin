import { createPinia } from "pinia"
import { App } from "vue"
import persist from "pinia-plugin-persist"

const setupPinia = (app: App) => {
  const store = createPinia()
  store.use(persist)
  app.use(store)
}

export default setupPinia
