import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'gk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  closeSession(e) {
    e.preventDefault();
    console.log("Cerrar sesión");
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }

}
