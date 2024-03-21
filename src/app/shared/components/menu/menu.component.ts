import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  
  constructor() {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon:   'pi pi-fw pi-desktop',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: '/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-fw pi-dollar',
                    routerLink: '/numbers'
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-fw pi-globe',
                    routerLink: '/on-common'
                }
            ]
        },
        {
            label: 'Pipes de Personalizados',
            icon:   'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Custom Pipes',
                    icon: 'pi pi-fw pi-cog',
                    routerLink: '/custom'
                }
            ]
        }
    ];
}


}
