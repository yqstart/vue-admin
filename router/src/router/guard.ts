import { store } from "@/utils"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    if (this.isLogin(to) === false) return { name: "login" }
    if (this.isGuest(to) === false) return from // {home}
  }

  private token(): string | undefined {
    return store.get("token")?.token
  }

  // 游客 login register
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
  }

  // 登录
  private isLogin(route: RouteLocationNormalized) {
    return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
