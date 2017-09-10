import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// components
import { AuthLoginComponent } from './containers/login/login.component';
import { AuthRegisterComponent } from './containers/register/register.component';

const routes: Route[] = [
  { path: 'auth/login', component: AuthLoginComponent },
  { path: 'auth/register', component: AuthRegisterComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
