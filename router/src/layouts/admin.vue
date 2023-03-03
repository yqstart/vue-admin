<template>
  <div class="admin min-h-screen w-screen flex bg-gray-200">
    <RMenu class="hidden md:block"></RMenu>
    <div class="content flex-1">
      <RNavBar></RNavBar>
      <HistoryLink></HistoryLink>
      <div class="px-3">
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
  }
}
</script>
