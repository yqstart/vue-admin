<script setup lang="ts">
import userApi from "@/apis/userApi";

const res = await userApi.info()
console.log(res.result, 'dsd')
</script>

<template>
  <h2>App</h2>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    <router-view />
</template>

<style scoped>
</style>
