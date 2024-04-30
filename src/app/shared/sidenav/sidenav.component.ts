// Angular components
import { Component } from '@angular/core';

//Interfaces
import { SideNavItem, SubSideNavItem } from '../../interfaces/components/sidenav';

//Own services
import { SidenavService } from '../../services/sidenav.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sideNavItemList: SideNavItem[] = [];

  constructor( private sideNavService: SidenavService){
    this.sideNavItemList = this.sideNavService.itemList;
  }

  onSelectItem(subItem: SubSideNavItem){

    this.sideNavItemList.forEach(item => {
      item.childrens.forEach(subItem => subItem.activeClass = '' );
    })

    subItem.activeClass = 'actived';
  }

}
