
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
  ],exports:[
    ButtonModule,
    CardModule ,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimengModule { }
