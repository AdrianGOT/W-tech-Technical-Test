export interface SideNavItem{
  title    : string,
  childrens: SubSideNavItem[],
}

export interface SubSideNavItem{
  title: string,
  path : string
  activeClass: 'actived' | '',

}
