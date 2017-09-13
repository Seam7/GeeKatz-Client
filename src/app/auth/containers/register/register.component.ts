import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  register: FormGroup;
  constructor(private router: Router, private authService: AuthService) {  }

  ngOnInit() {
    this.register = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('.+\@.+\..+')]),
      passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.confirmPass)
    })
  }

  onSubmit({value}) {
    console.log(value);
    let data = {
      email: value.email,
      password: value.passwords.password,
      password_confirmation: value.passwords.password_confirmation
    }
    this.authService.register(data)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/auth/login']);
      },
      error => {
        console.log(error.status);
        if(error.status === 422){
          //Show "Email unavailable" error
        } else {
          //Show server error
        }
      });
  }

  confirmPass(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirm = group.controls.password_confirmation.value;

    return (pass === confirm) ? null : { mismatch: true }
  }
}
