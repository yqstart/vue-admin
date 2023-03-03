import { RouteRecordRaw } from "vue-router"
export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/editor.vue"),
  children: [
    {
      name: "admin.base",
      path: "base",
      component: () => import("@/views/editor/base.vue")
    },
    {
      name: "admin.markdown",
      path: "markdown",
      component: () => import("@/views/editor/markdown.vue")
    }
  ]
} as RouteRecordRaw
