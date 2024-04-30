import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'w-tech-technical-test';
  draweMode: 'over' | 'side' = 'side';

  @ViewChild(MatDrawer) drawer : MatDrawer | undefined;
  constructor(
    private sidenavService: SidenavService,
    public breakpointObserver: BreakpointObserver
  ){}

  ngAfterViewInit(): void {
    this.sidenavService.sideNavDrawer = this.drawer;

    this.breakpointObserver
    .observe(['(min-width: 800px)'])
    .subscribe((state: BreakpointState) => {

      if(!state.matches){
        this.draweMode = 'over';
        this.drawer?.close();
      }else  {
        this.draweMode = 'side'
        this.drawer?.open();
      };
    });
  }


}
