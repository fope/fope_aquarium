import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'view',
  styles: [require('./home.view.scss')],
  template: require('./home.view.html')
})
export class HomeViewComponent implements OnInit {

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
  }
}