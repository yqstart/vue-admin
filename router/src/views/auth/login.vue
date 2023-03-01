<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="w-[720px] bg-red-600 grid grid-cols-2 bg-white rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-2xl">会员登录</h2>
        <div class="mt-8">
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="login-input"
          />
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="login-input mt-4"
          />
        </div>
      </div>
      <div>
        <img src="/image/login.jpg" class="h-96 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
div {
  .login-input {
    @apply border border-gray-200 placeholder:text-xs w-full rounded-sm py-1 px-2 outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
  }
}
</style>
