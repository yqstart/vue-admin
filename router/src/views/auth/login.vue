<template>
  <div
    class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5"
  >
    <div
      class="w-[720px] bg-red-600 md:grid grid-cols-2 bg-white rounded-lg shadow-md overflow-hidden translate-y-1/3 md:translate-y-0"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-2xl mt-10">会员登录</h2>
        <div class="mt-10">
          <RInput />
          <RInput class="mt-4" />
        </div>
        <RButton />
        <div class="flex gap-2 justify-center mt-5">
          <RLink />
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/image/login.jpg" class="h-96 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RInput from "@/components/form/RInput.vue";
import RButton from "@/components/form/RButton.vue";
import RLink from "@/components/form/RLink.vue";

export default defineComponent({
  components: {RLink, RButton, RInput },
});
</script>

<style scoped lang="scss">
//.login-input {
//  @apply border border-gray-200 placeholder:text-xs w-full rounded-sm py-1 px-2 outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
//}
//.login-button {
//  @apply bg-violet-800 text-white w-full py-2 rounded-md hover:bg-violet-500 duration-300;
//}
</style>
