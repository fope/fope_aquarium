import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './views';
import { CmsViewComponent } from './views';

const cmsRoutes: Routes = [
  { path: 'cms', component: CmsViewComponent },
  { path: 'cms/:id', component: CmsViewComponent },
];

const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomeViewComponent },
  { path: 'cms', component: CmsViewComponent },
  { path: '**', redirectTo: '/' }
];

export const RoutingComponents = [
  HomeViewComponent,
  CmsViewComponent,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
