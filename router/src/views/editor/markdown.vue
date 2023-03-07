<script setup lang="ts">
import RMarkDown from "@/components/markdown/RMarkDown.vue";
import { ref } from "vue";

const content = ref("markdown");
</script>

<template>
  <div>
    <RMarkDown v-model="content" :height="300" placeholder="text"></RMarkDown>
  </div>
</template>

<style scoped lang="scss"></style>
