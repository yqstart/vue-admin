<script setup lang="ts">
import { useUserStore } from "@/store/user";
import utils from "@/utils";
import { useMenuStore } from "@/store/menu";
import { storeToRefs } from "pinia";
import RBreadcrumb from "@/components/RBreadcrumb.vue";
import RNotification from "@/components/RNotification.vue";

const { close } = storeToRefs(useMenuStore());
const toggleState = () => {
  close.value = !close.value;
};

const fullScreen = () => {
  document.documentElement.requestFullscreen();
};
</script>

<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="toggleState">
        <i
          class="fa-solid fa-angles-right text-gray-600 mr-3 text-lg cursor-pointer"
          v-if="close"
        ></i>
        <i
          class="fa-solid fa-angles-left text-gray-600 mr-3 text-lg cursor-pointer"
          v-else
        ></i>
      </div>
      <RBreadcrumb class="hidden md:block"></RBreadcrumb>
    </div>
    <div class="flex justify-center items-center">
      <RNotification class="mr-5"></RNotification>
      <i
        class="fa-brands fa-microsoft text-xl cursor-pointer mr-5 text-gray-600"
        @click="fullScreen"
      ></i>
      <div class="relative group flex justify-center items-center">
        <img
          :src="useUserStore().info?.avatar"
          class="w-9 h-9 rounded-full object-cover border border-blue-300 p-0.5 cursor-pointer"
        />
        <span class="text-gray-600 text-sm ml-2 cursor-pointer">{{
          useUserStore().info?.name
        }}</span>
        <section
          class="group-hover:block hidden absolute px-3 bg-white shadow-sm whitespace-nowrap text-gray-700 border rounded-md top-9"
        >
          <div
            class="flex items-center cursor-pointer py-2"
            :class="index !== 2 && ['border-b']"
            v-for="(item, index) in 3"
            :key="index"
          >
            <i class="fas fa-house-user text-gray-600"></i>
            <span class="text-sm ml-1" @click="utils.user.logout()"
              >退出登录</span
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
