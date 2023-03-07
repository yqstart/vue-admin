<script setup lang="ts">
import { useMenuStore } from "@/store/menu";
import { storeToRefs } from "pinia";
import { RouteRecordRaw } from "vue-router";
import router from "@/router";

const { historyMenu } = storeToRefs(useMenuStore());
const { removeHistoryMenu } = useMenuStore();

const getHistory = () => {
  const routes: RouteRecordRaw[] = [];
  router.getRoutes().map((r) => routes.push(...r.children));

  return historyMenu.value.filter((m) => {
    return routes.some((r) => r.name === m.route);
  });
};

historyMenu.value = getHistory();
</script>

<template>
  <div class="hidden md:block bg-white p-3 border-t border-b">
    <div class="m-3 grid grid-flow-col gap-2 justify-start">
      <div
        v-for="(n, index) in historyMenu"
        :key="index"
        class="bg-white rounded-md py-2 px-3 text-gray-700 text-sm shadow-sm border hover:bg-violet-400 duration-300 hover:text-gray-100"
        :class="{ '!bg-violet-400 !text-gray-100': $route.name === n.route }"
      >
        <router-link :to="{ name: n.route }">{{ n.title }}</router-link>

        <i
          class="fas fa-delete-left ml-1 hover:text-green-300 cursor-pointer"
          @click="removeHistoryMenu(n)"
        ></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
