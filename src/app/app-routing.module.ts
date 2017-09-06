import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, //reemplazar por katz/home
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }, //reemplazar por katz/home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
