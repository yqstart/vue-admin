import { CacheEnum } from "./../enum/cacheEnum"
import utils from "@/utils"
export const logout = () => {
  utils.store.remove(CacheEnum.TOKEN_NAME)
}
