import utils from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";
// import { useUserStore } from "@/store/user";
import { CacheEnum } from "@/enum/cacheEnum";
import { useMenuStore } from "@/store/menu";

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    // if (this.isLogin(to) === false) return { name: "login" };
    // if (this.isGuest(to) === false) return from; // {home}
    if (to.meta.auth && !this.token()) return { name: "login" };
    if (to.meta.guest && this.token()) return from; // {home}
    // await this.getUserInfo()
    useMenuStore().addHistoryMenu(to);
  }

  // private getUserInfo = () => {
  //   if (this.token()) return useUserStore().getUserInfo()
  // }

  private token(): string | undefined {
    return utils.store.get(CacheEnum.TOKEN_NAME)?.token;
  }

  // 游客 register
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()));
  }

  // 登录
  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(
      !route.meta.auth || (route.meta.auth && this.token())
    );
    if (state === false) {
      utils.store.set(CacheEnum.REDIRECT_ROUTER_NAME, route.name);
    }
    return state;
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
