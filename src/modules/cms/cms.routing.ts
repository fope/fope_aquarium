import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeViewComponent } from './views';
// import { SearchViewComponent } from './views';
import { CmsViewComponent } from './components';
// import { AdminViewComponent } from './views';

const cmsRoutes: Routes = [
  // { path: 'owner/:id', component: CmsViewComponent },
  { path: 'cms', component: CmsViewComponent },
  { path: 'cms/Cats', component: CmsViewComponent },
];

export const CmsComponents = [
  CmsViewComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(cmsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CmsRoutingModule {}