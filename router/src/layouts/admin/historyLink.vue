<script setup lang="ts">
import { useMenuStore } from "@/store/menu"
import { storeToRefs } from "pinia"
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

const { historyMenu } = storeToRefs(useMenuStore())
</script>

<template>
  <div class="hidden md:block bg-white p-3 border-t border-b">
    <div class="m-3 grid grid-flow-col gap-2 justify-start">
      <router-link
        href=""
        v-for="(n, index) in historyMenu"
        :key="index"
        :to="{ name: n.route }"
        class="bg-white rounded-md py-2 px-3 text-gray-700 text-sm shadow-sm border hover:bg-violet-400 duration-300 hover:text-gray-100"
        :class="{ 'bg-violet-400 text-gray-100': $route.name === n.route }"
        >{{ n.title }}
        <i class="fas fa-delete-left ml-1"></i>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
