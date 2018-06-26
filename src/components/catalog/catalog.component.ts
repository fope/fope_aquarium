import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services';
import { CatalogModel, Catalog } from '../../models';

@Component({
  selector: 'catalog',
  template: require('./catalog.component.html'),
  styles: [require('./catalog.component.scss')]
})
export class CatalogComponent implements OnInit {
  private catalogs: Catalog[] = [];
  private editMode = false;
  private editCatalog: CatalogModel;

  constructor(
    private catalogsService: CatalogsService
  ) {}

  ngOnInit() {
    this.catalogsService.getCatalogs()
      .then((catalogs: Catalog[]) => this.catalogs = catalogs)
      .catch(error => console.log(error));
  }

  onSaveCatalog() {
    if (!this.editCatalog.name) return;
    console.log('save', this.editCatalog);

    if (this.editCatalog.id) {
      this.catalogsService.updateCatalog(this.editCatalog)
        .then(catalogs => this.catalogs = catalogs)
        .catch(error => console.log(error));
    } else {
      this.catalogsService.addCatalog(this.editCatalog)
        .then(catalogs => this.catalogs = catalogs)
        .catch(error => console.log(error));
    }
    this.editMode = false;
    this.editCatalog = null;
  }

  onEditCatalog(event: any, catalog: Catalog) {
    event && event.stopPropagation();

    if (this.editMode) return;

    const { id, name, cid, aliase } = catalog;
    this.editCatalog = { id, name, cid, aliase };
    this.editMode = true;
  }

  onAddCatalog(cid: number) {
    this.editCatalog = { id: 0, name: '', cid, aliase: '' };
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
    this.editCatalog = null;
  }
}