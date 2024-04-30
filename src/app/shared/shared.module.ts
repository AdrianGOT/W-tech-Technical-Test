// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { MoreToolsComponent } from './more-tools/more-tools.component';

// Angular material module
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MoreToolsComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    MoreToolsComponent
  ]
})
export class SharedModule { }
