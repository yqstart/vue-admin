<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800">
      <div class="logo text-white">
        <i class="fas fa-robot"></i>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true
    }
  }
}
</script>
