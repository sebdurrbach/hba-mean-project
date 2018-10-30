import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'accueil', loadChildren: './home/home.module#HomeModule' },
  { path: 'innovations', loadChildren: './innovations/innovations.module#InnovationsModule'},
  { path: 'services', loadChildren: './services/services.module#ServicesModule'},
  { path: 'apropos', loadChildren: './about/about.module#AboutModule'},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
