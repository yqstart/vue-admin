<template>
  <div id="wang_editor"></div>
</template>

<script lang="ts" setup>
import { nextTick } from "vue";
import wangEditor from "@/components/markdown/wangEditor";
interface Props {
  height?: number;
  modelValue?: string;
  uploadImgServer?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  modelValue: "",
  uploadImgServer: "/api/upload/image",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  new wangEditor("#wang_editor", props, (newHtml: string) => {
    emit("update:modelValue", newHtml);
  });
});
</script>

<style scoped lang="scss"></style>
