import { useUserStore } from "./../store/user"
import { useRouter } from "vue-router"
import { CacheEnum } from "./../enum/cacheEnum"
import utils from "@/utils"
import userApi from "@/apis/userApi"
import { storeToRefs } from "pinia"

const router = useRouter()
export const login = async (values: any) => {
  const {
    result: { token }
  } = await userApi.login(values)
  utils.store.set(CacheEnum.TOKEN_NAME, {
    // expire: 600,
    token
  })
  router.push({ name: "home" })
}
export const logout = () => {
  utils.store.remove(CacheEnum.TOKEN_NAME)
  router.push("/")
  useUserStore().info = null
}
