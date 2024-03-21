import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OnCommonPageComponent } from './pages/on-common-page/on-common-page.component';
import { PrimengModule } from '../prime-ng/primeng.module';
import { OrderComponent } from './pages/order/order.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OnCommonPageComponent,
    OrderComponent,
    CanFlyPipe,
    ToggleCasePipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ],
  exports:[
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
