import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app.routing';

import { AppComponent } from './components';
import { AssortmentsComponent } from './components';
import { CatalogComponent } from './components';
import { TranslateProviders, TranslatePipe, TranslateService } from './translate';
import { CatalogsService } from './services';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    CatalogComponent,
    AssortmentsComponent,
    RoutingComponents,
    TranslatePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    CatalogsService,
    TranslateProviders,
    TranslateService,
  ]
})
export class AppModule {}