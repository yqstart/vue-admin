<script setup lang="ts">
import { useMenuStore } from "@/store/menu";
import { useRouter, useRoute } from "vue-router";
import { IMenu } from "#/menu";
import { watch } from "vue";
import { storeToRefs } from "pinia";

const { menu: menuStore, close } = storeToRefs(useMenuStore());
const { setCurrentMenu } = useMenuStore();
const routerService = useRouter();

const route = useRoute();

watch(route, () => {
  setCurrentMenu(route);
});

const resetMenus = () => {
  menuStore.value.forEach((pMenu) => {
    pMenu.isCheck = false;
    pMenu.children?.forEach((cMenu) => {
      cMenu.isCheck = false;
    });
  });
};

const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  resetMenus();
  pMenu.isCheck = true;
  if (cMenu) {
    cMenu.isCheck = true;
    routerService.push({ name: cMenu.route });
  }
};
</script>

<template>
  <div class="admin-menu">
    <div class="menu w-[200px] bg-gray-800" :class="{ close: close }">
      <div class="logo">
        <i class="fas fa-robot text-fuchsia-300 mr-2 text-2xl"></i>
        <span class="text-xl">vue-admin-cli</span>
      </div>
      <!-- 菜单 -->
      <div class="container">
        <dl>
          <dt
            @click="$router.push('/admin')"
            :class="{
              'bg-violet-500 text-white': $route.name === 'admin.home',
            }"
          >
            <section>
              <i class="mr-2 text-xl fa-solid fa-align-justify"></i>
              <span class="text-base">dashboard</span>
            </section>
          </dt>
        </dl>
        <dl v-for="(menu, index) in menuStore" :key="index">
          <dt @click="handle(menu)">
            <section>
              <i class="mr-2 text-xl" :class="menu.icon"></i>
              <span class="text-base">{{ menu.title }}</span>
            </section>
            <section>
              <i
                class="fas fa-angle-down duration-300"
                :class="{ 'rotate-180': menu?.isCheck }"
              ></i>
            </section>
          </dt>
          <dd v-show="menu.isCheck && !close">
            <div
              v-for="(child, i) in menu.children"
              @click="handle(menu, child)"
              :class="{ active: child?.isCheck }"
              :key="i"
            >
              {{ child?.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg block md:hidden"></div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply z-20;
  .menu {
    @apply h-full;
    .logo {
      @apply text-gray-300 flex items-center p-4;
    }
    .container {
      dl {
        @apply text-gray-300 text-sm relative;
        dt {
          @apply p-4 flex items-center justify-between cursor-pointer;
          section {
            @apply flex items-center;
          }
        }
        dd {
          div {
            @apply py-3 pl-4 mt-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 bg-gray-700;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
    &.close {
      @apply w-auto;
      .logo {
        span {
          @apply hidden;
        }
      }
      .container {
        dl {
          dt {
            @apply justify-center;
            section {
              span {
                @apply hidden;
              }
              &:nth-of-type(2) {
                @apply hidden;
              }
            }
          }
          &:hover {
            dd {
              display: block !important;
              @apply absolute left-full w-[200px] bg-gray-700 top-[5px];
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .admin-menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    .menu {
      @apply h-full z-50 absolute;
      &.close {
      }
    }
    .bg {
      @apply bg-gray-100 opacity-75 w-screen h-screen absolute left-0 top-0;
    }
  }
}
</style>
