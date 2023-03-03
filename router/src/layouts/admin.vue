<template>
  <div class="admin h-screen w-screen flex">
    <RMenu></RMenu>
    <div class="content flex-1 bg-gray-200">
      <RNavBar></RNavBar>
      <HistoryLink></HistoryLink>
      <div class="m-3 p-5 bg-white">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RMenu from "./admin/RMenu.vue"
import RNavBar from "./admin/RNavBar.vue"
import HistoryLink from "@/layouts/admin/historyLink.vue"
</script>

<style scoped lang="scss"></style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    }
  },
  components: { RMenu, RNavBar }
}
</script>
