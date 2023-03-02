<script setup lang="ts">
import { ref } from "vue"

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menus = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fab fa-cc-diners-club",
    active: true,
    children: [
      { title: "404页面", active: true },
      { title: "403页面" },
      { title: "500页面" }
    ]
  },
  {
    title: "编辑器",
    icon: "fas fa-spell-check",
    children: [{ title: "markdown" }, { title: "富文本编辑器" }]
  }
])

const resetMenus = () => {
  menus.value.forEach(pMenu => {
    pMenu.active = false
    pMenu.children?.forEach(cMenu => {
      cMenu.active = false
    })
  })
}

const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  resetMenus()
  pMenu.active = true
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
        v-for="(menu, index) in menus"
        :key="index">
        <dt @click="handle(menu)">
          <section>
            <i
              class="mr-2 text-xl"
              :class="menu.icon"></i>
            <span class="text-base">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down"></i>
          </section>
        </dt>
        <dd
          v-show="menu.active"
          v-for="(child, i) in menu.children"
          @click="handle(menu, child)"
          :class="{ active: child.active }"
          :key="i">
          {{ child.title }}
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
        @apply py-3 pl-4 mt-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500;
        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
