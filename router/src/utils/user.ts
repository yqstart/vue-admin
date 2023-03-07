import { useUserStore } from "./../store/user";
import { Router } from "vue-router";
import { CacheEnum } from "./../enum/cacheEnum";
import utils from "@/utils";
import userApi from "@/apis/userApi";

export const login = async (values: any, router: Router) => {
  const {
    result: { token },
  } = await userApi.login(values);
  utils.store.set(CacheEnum.TOKEN_NAME, {
    // expire: 600,
    token,
  });
  const routerName = utils.store.get(CacheEnum.REDIRECT_ROUTER_NAME) ?? "home";
  await router.push({ name: routerName });
};
export const logout = (router: Router) => {
  utils.store.remove(CacheEnum.TOKEN_NAME);
  router.push("/");
  useUserStore().info = null;
};
