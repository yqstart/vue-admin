<template>
  <div id="r_markdown"></div>
</template>

<script setup lang="ts">
import ToastEditor from "@/components/markdown/toastEditor";
import { nextTick } from "vue";
interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const toastEditor = new ToastEditor(
    "#r_markdown",
    props.modelValue,
    `${props.height}px`
  );
  toastEditor.editor.on("change", (type: string) => {
    emit(
      "update:modelValue",
      toastEditor.editor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>

<style lang="scss">
#r_markdown {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }

  .fullScreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>
