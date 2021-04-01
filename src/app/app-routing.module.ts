import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent}        from './view/layout/layout.component';
import {ProfileComponent}       from './view/profile/profile.component';
import {PortfolioComponent}     from './view/portfolio/portfolio.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent
  // },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
