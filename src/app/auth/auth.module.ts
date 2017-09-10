import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// imports
import { AuthRoutingModule } from './auth.routing';

// components
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './containers/login/login.component';
import { AuthRegisterComponent } from './containers/register/register.component';

// services
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    AuthRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [],
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
