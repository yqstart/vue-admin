<script setup lang="ts">
import { ref } from "vue"
import { useRouterStore } from "@/store/router"
import { RouteRecordNormalized, RouteRecordRaw } from "vue-router"

const { routes: routerStore } = useRouterStore()

const resetMenus = () => {
  routerStore.forEach(pMenu => {
    pMenu.meta.isCheck = false
    pMenu.children?.forEach(cMenu => {
      if (cMenu.meta) {
        cMenu.meta.isCheck = false
      }
    })
  })
}

const handle = (pMenu: RouteRecordNormalized, cMenu?: RouteRecordRaw) => {
  resetMenus()
  pMenu.meta.isCheck = true
  if (cMenu && cMenu.meta) {
    cMenu.meta.isCheck = true
  }
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-2xl"></i>
      <span class="text-xl">vue-admin-cli</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl
        v-for="(menu, index) in routerStore"
        :key="index">
        <dt @click="handle(menu)">
          <section>
            <i
              class="mr-2 text-xl"
              :class="menu.meta.icon"></i>
            <span class="text-base">{{ menu.meta.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu.meta?.isCheck }"></i>
          </section>
        </dt>
        <dd
          v-show="menu.meta.isCheck"
          v-for="(child, i) in menu.children"
          @click="handle(menu, child)"
          :class="{ active: child.meta?.isCheck }"
          :key="i">
          {{ child.meta?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply mt-6 flex items-center justify-between cursor-pointer;
        section {
          @apply flex items-center;
        }
      }
      dd {
        @apply py-3 pl-4 mt-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 bg-gray-700;
        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
