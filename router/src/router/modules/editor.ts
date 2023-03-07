import { RouteRecordRaw } from "vue-router";
export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    menu: {
      title: "编辑页面",
      icon: "fas fa-keyboard",
    },
  },
  children: [
    {
      name: "admin.base",
      path: "base",
      component: () => import("@/views/editor/base.vue"),
      meta: {
        menu: {
          title: "富文本",
        },
      },
    },
    {
      name: "admin.markdown",
      path: "markdown",
      component: () => import("@/views/editor/markdown.vue"),
      meta: {
        menu: {
          title: "markdown",
        },
        permission: "editor_markdown",
      },
    },
  ],
} as RouteRecordRaw;
