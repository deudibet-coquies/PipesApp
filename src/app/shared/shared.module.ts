import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from '../prime-ng/primeng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule 
  ],exports:[
    MenuComponent
  ]
})
export class SharedModule { }
