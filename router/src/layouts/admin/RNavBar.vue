<script setup lang="ts">
import { useUserStore } from "@/store/user"
import utils from "@/utils"
</script>

<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative group">
      <img
        :src="useUserStore().info?.avatar"
        class="w-9 h-9 rounded-full object-cover border border-blue-300 p-0.5 cursor-pointer" />
      <span class="text-gray-600 text-sm ml-2 cursor-pointer">{{
        useUserStore().info?.name
      }}</span>
      <section
        class="group-hover:block hidden absolute px-3 bg-white shadow-sm whitespace-nowrap text-gray-700 border rounded-md top-9">
        <div
          class="flex items-center cursor-pointer py-2"
          :class="index !== 2 && ['border-b']"
          v-for="(item, index) in 3"
          :key="index">
          <i class="fas fa-house-user text-gray-600"></i>
          <span
            class="text-sm ml-1"
            @click="utils.user.logout()"
            >退出登录</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
