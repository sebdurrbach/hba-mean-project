import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyServiceComponent } from './company-service/company-service.component';

const routes: Routes = [
  {
    path: ':target',
    component: CompanyServiceComponent,
    data: {
      title: 'Services aux entreprises et aux start-ups',
      subtitle: 'Subtitles',
      background: 'lightblue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
