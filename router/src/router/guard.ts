import utils from "@/utils"
import { RouteLocationNormalized, Router } from "vue-router"
import { useUserStore } from "@/store/user"
import { CacheEnum } from "@/enum/cacheEnum"

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    if (this.isLogin(to) === false) return { name: "login" }
    if (this.isGuest(to) === false) return from // {home}
    await this.getUserInfo()
  }

  private getUserInfo = () => {
    if (this.token()) return useUserStore().getUserInfo()
  }

  private token(): string | undefined {
    return utils.store.get(CacheEnum.TOKEN_NAME)?.token
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
