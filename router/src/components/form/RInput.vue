<template>
  <input
    type="text"
    class="login-input"
    :value="modelValue"
    @input="inputChange"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputChange = (event: Event) => {
  if (event.target) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
  }
};
</script>

<style scoped lang="scss">
.login-input {
  @apply border border-gray-200 placeholder:text-xs w-full rounded-sm py-1 px-2 outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
