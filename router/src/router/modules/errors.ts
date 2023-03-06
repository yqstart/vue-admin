import { RouteRecordRaw } from "vue-router"
export default {
  name: "error",
  path: "/error",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    menu: {
      icon: "fas fa-bomb",
      title: "错误页面"
    }
  },
  children: [
    {
      name: "error.404",
      path: "404",
      component: () => import("@/views/errors/404.vue"),
      meta: {
        menu: {
          title: "404"
        }
      }
    },
    {
      name: "error.500",
      path: "500",
      component: () => import("@/views/errors/500.vue")
    }
  ]
} as RouteRecordRaw
