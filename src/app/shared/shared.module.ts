import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class SharedModule { }
