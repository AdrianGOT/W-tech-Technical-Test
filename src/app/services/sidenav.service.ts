import { Injectable } from '@angular/core';
import { SideNavItem } from '../interfaces/components/sidenav';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }



  private _itemList: SideNavItem[] = [
    {
      title: 'Introducción',
      childrens: [
        {
          title: 'Actividad 1',
          path: 'page/actividad-uno',
          activeClass: '',
        },
        {
          title: 'Actividad 2',
          path: 'page/actividad-dos',
          activeClass: '',

        }
      ]
    },
    {
      title: 'Explicación',
      childrens: []
    }
  ]

  sideNavDrawer: MatDrawer | undefined;

  get itemList(): SideNavItem[]{
    return [...this._itemList];
  }
}
