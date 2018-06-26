export interface CatalogModel {
  id: number;
  cid: number;
  name: string;
  aliase: string;
}

export class Catalog implements CatalogModel {
  public childCatalog: CatalogModel[];

  constructor(
    public id: number,
    public cid: number,
    public name: string,
    public aliase: string
  ) {
    this.childCatalog = [];
  }
}