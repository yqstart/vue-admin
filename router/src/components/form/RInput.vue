<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="login-input" />
</template>

<script></script>

<style scoped lang="scss">
.login-input {
  @apply border border-gray-200 placeholder:text-xs w-full rounded-sm py-1 px-2 outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
