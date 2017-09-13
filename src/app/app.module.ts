import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { KatzModule } from './katz/katz.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from './shared/helpers/http-client';

//Modules (Aqui van todos los .module de la app)
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    KatzModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
