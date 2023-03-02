<template>
  <div class="admin h-screen w-screen flex">
    <RMenu></RMenu>
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import RMenu from "./admin/RMenu.vue"
</script>

<style scoped lang="scss"></style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    }
  },
  components: { RMenu }
}
</script>
