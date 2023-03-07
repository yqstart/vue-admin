<script setup lang="ts">
import RWangEditor from "@/components/markdown/RWangEditor.vue";
import { ref } from "vue";

const content = ref("wangEditor");
</script>

<template>
  <div>
    <RWangEditor
      :height="500"
      v-model="content"
      uploadImgServer="/api/upload/image"
    ></RWangEditor>
  </div>
</template>

<style scoped lang="scss"></style>
