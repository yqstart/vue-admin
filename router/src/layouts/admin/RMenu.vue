<script setup lang="ts">
import { ref } from "vue"
import { useMenuStore } from "@/store/menu"
import { useRouter } from "vue-router"
import { IMenu } from "#/menu"

const { menu: menuStore } = useMenuStore()
const routerService = useRouter()

const resetMenus = () => {
  menuStore.forEach(pMenu => {
    pMenu.isCheck = false
    pMenu.children?.forEach(cMenu => {
      cMenu.isCheck = false
    })
  })
}

const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  resetMenus()
  pMenu.isCheck = true
  if (cMenu) {
    cMenu.isCheck = true
    routerService.push({ name: cMenu.route })
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
        v-for="(menu, index) in menuStore"
        :key="index">
        <dt @click="handle(menu)">
          <section>
            <i
              class="mr-2 text-xl"
              :class="menu.icon"></i>
            <span class="text-base">{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu?.isCheck }"></i>
          </section>
        </dt>
        <dd
          v-show="menu.isCheck"
          v-for="(child, i) in menu.children"
          @click="handle(menu, child)"
          :class="{ active: child?.isCheck }"
          :key="i">
          {{ child?.title }}
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
