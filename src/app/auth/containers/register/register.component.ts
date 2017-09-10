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
  constructor() {  }

  ngOnInit() {
    this.register = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl('')
    })
  }
}
