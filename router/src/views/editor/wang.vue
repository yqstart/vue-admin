<template>
  <div>
    <RWangEditorNext v-model="content"></RWangEditorNext>
  </div>
</template>

<script setup lang="ts">

import RWangEditorNext from "@/components/markdown/RWangEditorNext.vue";

const content = ref('<p>wangEditorNext</p>')
</script>

<style scoped>

</style>