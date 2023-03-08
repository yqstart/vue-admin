import userApi, { User } from "@/apis/userApi"
import { defineStore } from "pinia"
import { ref } from "vue"
import utils from "@/utils";
import {CacheEnum} from "@/enum/cacheEnum";

export const useUserStore = defineStore("userStore", () => {
  const info = ref<null | User>(null)
  const getUserInfo = async () => {
    if(utils.store.get(CacheEnum.TOKEN_NAME)) {
      const res = await userApi.info()
      info.value = res.data
    }
  }
  return { getUserInfo, info }
})
