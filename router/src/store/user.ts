import userApi, { User } from "@/apis/userApi"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("userStore", () => {
  const info = ref<null | User>(null)
  const getUserInfo = async () => {
    const res = await userApi.info()
    info.value = res.result
  }
  return { getUserInfo, info }
})
