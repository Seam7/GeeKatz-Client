import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gk-auth',
  template: `
    <router-outlet></router-outlet>
  `
})

export class AuthComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
