import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

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
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl('')
    })
  }

  onSubmit({value}) {
    this.authService.register(value)
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
}
