import { useUserStore } from "./../store/user"
import { useRouter } from "vue-router"
import { CacheEnum } from "./../enum/cacheEnum"
import utils from "@/utils"
import userApi from "@/apis/userApi"

export const login = async (values: any) => {
  const router = useRouter()
  const {
    result: { token }
  } = await userApi.login(values)
  utils.store.set(CacheEnum.TOKEN_NAME, {
    // expire: 600,
    token
  })
  const routerName = utils.store.get(CacheEnum.REDIRECT_ROUTER_NAME) ?? "home"
  router.push({ name: routerName })
}
export const logout = () => {
  utils.store.remove(CacheEnum.TOKEN_NAME)
  const router = useRouter()
  router.push("/")
  useUserStore().info = null
}
