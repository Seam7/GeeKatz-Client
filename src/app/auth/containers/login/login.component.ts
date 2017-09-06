import { Component, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class AuthLoginComponent {


  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(){
  }

  onSubmit({value}) {

  }
}
