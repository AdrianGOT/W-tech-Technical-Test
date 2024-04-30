import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private sideNavService: SidenavService
  ){}

  toggleSideNav(){
    this.sideNavService.sideNavDrawer?.toggle();
  }


}
