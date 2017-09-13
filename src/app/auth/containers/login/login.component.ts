import { Component, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class AuthLoginComponent {

  login: FormGroup;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(){
    this.login = new FormGroup({
      auth: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('.+\@.+\..+')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    })
  }

  onSubmit({value}) {
    console.log(value);
    this.authService.login(value)
    .subscribe(response => {
      //save token to somewhere
      let token = response.json().jwt;
      sessionStorage.setItem('currentUser', JSON.stringify({ token: token }));
      console.log(JSON.parse(sessionStorage.getItem('currentUser')));
    })
  }

  goToRegister(){
    this.router.navigate(['/auth/register']);
  }
}
