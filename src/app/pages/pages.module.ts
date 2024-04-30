// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

// Own modules
import { PageRoutingModule } from './pages-routing.module';

// Own Components
import { PagesComponent } from './pages.component';
import { ActivityOneComponent } from './activity-one/activity-one.component';
import { ActivityTwoComponent } from './activity-two/activity-two.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ActivityOneComponent,
    ActivityTwoComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    LayoutModule
  ]
})
export class PagesModule { }
