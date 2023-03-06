<template>
  <div class="admin grid md:grid-cols-[auto_1fr] bg-gray-200 h-screen w-screen">
    <RMenu></RMenu>
    <!--    class="hidden md:block"-->
    <div class="content grid grid-rows-[auto_1fr]">
      <div>
        <RNavBar></RNavBar>
        <HistoryLink></HistoryLink>
      </div>
      <div class="mx-3 relative overflow-y-auto">
        <router-view v-slot="{ Component, route }">
          <transition
            appear
            class="animate__animated"
            :enter-active-class="
              route.meta.enterClass ?? 'animate__fadeInRight'
            "
            :leave-active-class="
              route.meta.leaveClass ?? 'animate__fadeOutLeft'
            "
          >
            <component
              :is="Component"
              class="absolute w-full"
              :key="route.path"
            />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RMenu from "./admin/RMenu.vue";
import RNavBar from "./admin/RNavBar.vue";
import HistoryLink from "@/layouts/admin/historyLink.vue";
import { useMenuStore } from "@/store/menu";

useMenuStore().getMenus();
</script>

<style scoped lang="scss">
.animate__fadeInRight {
  animation-duration: 0.3s;
}
.animate__fadeOutLeft {
  animation-duration: 0.3s;
}
</style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>
