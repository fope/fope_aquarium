import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { config } from '../config/env';
import { CatalogModel, Catalog } from '../models';
import { CatalogsMock } from '../../mocks/catalogs.mock';

@Injectable()
export class CatalogsService {
  private apiUrl = config.apiCatalog;
  private rawCatalogs: CatalogModel[] = [];

  constructor(private http: Http) {}

  getCatalogs() {
    if (this.rawCatalogs.length) return this.createCatalog();
    
    this.rawCatalogs = CatalogsMock;
    return this.createCatalog();
  }

  addCatalog(catalog: CatalogModel) {
    let id = 1;
    CatalogsMock.forEach(item => {
      if (item.id >= id) id = item.id + 1;
    });

    CatalogsMock.push(Object.assign(catalog, { id }));
    this.rawCatalogs = CatalogsMock;
    return this.createCatalog();
  }

  updateCatalog(catalog: CatalogModel) {
    const item = CatalogsMock.find((cat: CatalogModel) => cat.id === catalog.id);
    if (item) {
      item.name = catalog.name;
      this.rawCatalogs = CatalogsMock;
    }

    return this.createCatalog();
  }

  removeCatalog(catalog:CatalogModel) {
    const id = CatalogsMock.findIndex((cat: CatalogModel) => cat.id === catalog.id);
    if (id > 0) {
      CatalogsMock.splice(id, 1);
      this.rawCatalogs = CatalogsMock;
    }

    return this.createCatalog();
  }

  private createCatalog(): Promise<Catalog[]> {
    const root: Catalog[] = this.rawCatalogs.filter(item => item.cid === 0)
      .map((catalog: CatalogModel) => {
        return new Catalog(catalog.id, catalog.cid, catalog.name, catalog.aliase);
      });

    root.map((catalog: Catalog) => {
      catalog.childCatalog = this.rawCatalogs.filter(item => item.cid === catalog.id)
        .map((catalog: CatalogModel) => {
          return new Catalog(catalog.id, catalog.cid, catalog.name, catalog.aliase);
        });

      catalog.childCatalog.map((child: Catalog) => {
        child.childCatalog = this.rawCatalogs.filter(item => item.cid === child.id)
        .map((catalog: CatalogModel) => {
          return new Catalog(catalog.id, catalog.cid, catalog.name, catalog.aliase);
        });
      });
    });

    return Promise.resolve(root);
  }

  private handlerError(error: any) {
    return Promise.reject(error.message || error);
  }
}