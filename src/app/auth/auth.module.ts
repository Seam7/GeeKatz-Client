import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// imports
import { AuthRoutingModule } from './auth.routing';

// components
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './containers/login/login.component';

// services
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    AuthRoutingModule,
    HttpModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [],
  declarations: [
    AuthComponent,
    AuthLoginComponent,
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
