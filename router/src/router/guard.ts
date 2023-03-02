import { store } from "@/utils"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to, from) => {
      const token = store.get("token")?.token
      // 登录验证
      if (this.isLogin(to, token) === false) return { name: "login" }
      if (this.isGuest(to, token) === false) return from // { name: "home" }
    })
  }

  private isGuest(route: RouteLocationNormalized, token: string | undefined) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }

  private isLogin(route: RouteLocationNormalized, token: string | undefined) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
