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
      name: "editor.base",
      path: "base",
      component: () => import("@/views/editor/base.vue"),
      meta: {
        menu: {
          title: "富文本",
        },
      },
    },
    {
      name: "editor.wang",
      path: "wang",
      component: () => import("@/views/editor/wang.vue"),
      meta: {
        menu: {
          title: "wangEditor",
        },
      },
    },
    {
      name: "editor.markdown",
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
