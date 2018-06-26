import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assortments',
  template: require('./assortments.component.html'),
  styles: [require('./assortments.component.scss')]
})
export class AssortmentsComponent implements OnInit {
  private assortments: any[] = [];

  constructor() {}

  ngOnInit() {}
}