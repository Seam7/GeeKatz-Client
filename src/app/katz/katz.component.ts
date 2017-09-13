import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gk-katz',
  template: `
    <router-outlet></router-outlet>
  `
})
export class KatzComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
