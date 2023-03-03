import { RouteRecordRaw } from "vue-router"
export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/editor.vue"),
  meta: {
    title: "编辑页面",
    icon: "fas fa-keyboard",
    show: true
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
        title: "markdown",
        show: true
      }
    }
  ]
} as RouteRecordRaw
