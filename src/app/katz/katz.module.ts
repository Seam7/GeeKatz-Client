import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { KatzRoutingModule } from './katz.routing';
import { CreateKatComponent } from './containers/create-kat/create-kat.component';
import { KatzService } from './katz.service';

@NgModule({
  imports: [
    KatzRoutingModule,
    FormsModule
  ],
  declarations: [
    CreateKatComponent
  ],
  providers: [
    KatzService
  ]
})
export class KatzModule { }
