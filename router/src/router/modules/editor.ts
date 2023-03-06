import { RouteRecordRaw } from "vue-router"
export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    menu: {
      title: "编辑页面",
      icon: "fas fa-keyboard"
    }
  },
  children: [
    {
      name: "admin.base",
      path: "base",
      component: () => import("@/views/editor/base.vue")
    },
    {
      name: "admin.markdown",
      path: "markdown",
      component: () => import("@/views/editor/markdown.vue"),
      meta: {
        menu: {
          title: "markdown"
        }
      }
    }
  ]
} as RouteRecordRaw
