<script setup lang="ts">
import {env} from "@/types/helper";
console.log(env)
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
