import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CreateKatComponent } from './containers/create-kat/create-kat.component';

const routes: Route[] = [
  { path: 'katz/create', component: CreateKatComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class KatzRoutingModule { }
