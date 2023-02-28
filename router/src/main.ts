import { createApp } from 'vue'
import router, { setupRouter } from "./router";
import App from './App.vue'

const init = async () => {
    const app = createApp(App)
    setupRouter(app)
    // 定义异步，路由处理完成再挂载组件
    await router.isReady()
    app.mount('#app')
}

init().then(r => {})
