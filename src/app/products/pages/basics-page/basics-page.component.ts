import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

public lower: string = 'emilio';
public upper: string = 'EMILIO';
public tittle: string = 'EMIlio coQUies';

////////fechas////////

public custom: Date = new Date();

}
