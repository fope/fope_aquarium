import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Component({
  selector: 'view',
  styles: [require('./search.view.scss')],
  template: require('./search.view.html')
})
export class SearchViewComponent implements OnInit {
  
  constructor(
    private activateRoute : ActivatedRoute,
    private router : Router
    ) {}

  ngOnInit() {
  }
}