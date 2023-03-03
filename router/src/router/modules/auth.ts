import { RouteRecordRaw } from "vue-router"
export default {
  name: "auth",
  path: "/auth",
  component: () => import("@/layouts/auth.vue"),
  meta: { guest: true },
  children: [
    {
      name: "login",
      path: "login",
      component: () => import("@/views/auth/login.vue")
    },
    {
      name: "register",
      path: "register",
      component: () => import("@/views/auth/register.vue")
    }
  ]
} as RouteRecordRaw
