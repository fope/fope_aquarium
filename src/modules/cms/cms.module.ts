import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CmsRoutingModule, CmsComponents } from './cms.routing';
import { CatalogComponent } from './../../components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CmsRoutingModule,
  ],
  declarations: [
    CatalogComponent,
    CmsComponents,
  ],
  providers: []
})
export class CmsModule {}