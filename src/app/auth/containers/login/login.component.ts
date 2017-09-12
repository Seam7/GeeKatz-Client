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
    // console.log(value);
    this.authService.login(value)
    .subscribe(response => {
      console.log(response.json());
      //save token to somewhere
      localStorage.setItem('currentUser', JSON.stringify(response.json()));
    })
  }

  goToRegister(){
    this.router.navigate(['/auth/register']);
  }
}
