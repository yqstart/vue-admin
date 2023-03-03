// typings.d.ts or router.ts
import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    auth?: boolean
    guest?: boolean
    // 路由是否在菜单中显示
    show?: boolean
    // 菜单标题
    title?: string
    icon?: string
  }
}
