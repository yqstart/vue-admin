<script setup lang="ts">
import { ref } from "vue"

const links = ref<{ title: string }[]>([
  { title: "编辑器" },
  { title: "订单列表" },
  { title: "用户管理" },
  { title: "编辑器" },
  { title: "编辑器" },
  { title: "编辑器" },
  { title: "订单列表" },
  { title: "用户管理" },
  { title: "编辑器" }
])
</script>

<template>
  <div class="m-3 grid grid-flow-col gap-2 justify-start">
    <a
      href=""
      v-for="(n, index) in links"
      :key="index"
      class="bg-white rounded-md py-2 px-3 text-gray-700 text-sm"
      >{{ n.title }}
      <i class="fas fa-delete-left ml-1"></i>
    </a>
  </div>
</template>

<style scoped lang="scss"></style>
