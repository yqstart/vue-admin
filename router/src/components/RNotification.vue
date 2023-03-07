<template>
  <div class="notification">
    <i
      class="fa-solid fa-bell cursor-pointer text-xl text-gray-600"
      @click.stop="show = !show"
    ></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="" class="class">wewewewewewewewewwwwwwwwwwwww</a>
        <a href="" class="class">wewewewewewewewe</a>
        <a href="" class="class">wewewewewewewewe</a>
        <a href="" class="class">wewewewewewewewe</a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";

const activeName = ref("site");
const show = ref(false);

nextTick(() => {
  document.documentElement.addEventListener("click", () => {
    show.value = false;
  });
});
</script>

<style scoped lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 py-2 border rounded-md shadow-md right-[-60px] z-10 w-[250px];
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-violet-500;
    }
  }
}
</style>
