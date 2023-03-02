<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>
