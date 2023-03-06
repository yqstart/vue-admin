import { IMenu } from "#/menu"
import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    auth?: boolean
    guest?: boolean
    permissions?: string[]
    menu?: IMenu
    enterClass?: string
    leaveClass?: string
  }
}
