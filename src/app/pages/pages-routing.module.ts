import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityOneComponent } from './activity-one/activity-one.component';
import { ActivityTwoComponent } from './activity-two/activity-two.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'page',
    component: PagesComponent,
    children: [
      {
        path: 'actividad-uno',
        component: ActivityOneComponent,
        data: {title: 'Actividad uno'}
      },
      {
        path: 'actividad-dos',
        component: ActivityTwoComponent,
        data: {title: 'Actividad dos'}
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
