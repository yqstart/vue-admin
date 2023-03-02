<script setup lang="ts"></script>

<template>
  <div
    class="h-screen w-screen bg-gray-700 flex justify-center items-center flex-col">
    <img
      src="/image/login.jpg"
      class="w-52 h-52 object-cover rounded-full border-4 border-white -translate-y-24" />
    <div class="-translate-y-20 mt-2">
      <router-link
        :to="{ name: 'admin.home' }"
        class="common-button px-4"
        >后台管理</router-link
      >
      <router-link
        :to="{ name: 'login' }"
        class="common-button common-danger px-4 ml-3"
        >用户登录</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
