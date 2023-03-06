interface Menu {
  title: string
  icon?: string
  isCheck?: boolean
  route?: string
}

export interface IMenu extends Menu {
  children?: Menu[]
}
