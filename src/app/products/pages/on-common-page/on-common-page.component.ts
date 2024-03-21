import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-on-common-page',
  templateUrl: './on-common-page.component.html',
  styleUrl: './on-common-page.component.css'
})
export class OnCommonPageComponent {

  // i18nSelect
  public name:string = 'Deudibet Coquies';
  public gender: "male" | "female" = 'male';
  public invitationMap = {
    'male':'invotarlo',
    'female':'invotarla'
  }

  changeclient():void{
    this.name ='Karen Zuñiga';
    this.gender ='female';
  }

// i18nPlural

public clients: string[] = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro', 'Ana', 'Diego', 'Sofía', 'Luis', 'Elena'];
public clientMap = {
  '=0':'no tenemos ningún cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  'other':'tenemos # clientes esperando.'

}
deletecClient():void{
this.clients.shift();
}


// keyvalue pipe
public persona = {
  nombre: 'Emilio',
  edad: 40,
  direccion: 'Villa U,santa marta, colmbia'
};


  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.persona.nombre = 'Otro nombre'
    }, 3500);
  })


}
