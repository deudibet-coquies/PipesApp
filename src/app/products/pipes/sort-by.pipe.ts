import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interface/hero';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( heroes: Hero[], sortBy?: keyof Hero | '', ascendente?: boolean): Hero[] {

     console.log({ heroes, sortBy , arguments});

    switch( sortBy ) {

      case 'name':
         return heroes.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 ) 

        // return heroes.sort((a, b) => {
        //   const valorA = a.name;
        //   const valorB = b.name;
    
        //   if (ascendente) {
        //     return valorA < valorB ? -1 : valorA > valorB ? 1 : 0;
        //   } else {
        //     return valorA > valorB ? -1 : valorA < valorB ? 1 : 0;
        //   }
        // });

      case 'canFly':
        return heroes.sort( (a,b) => ( a.canFly > b.canFly ) ? 1 : -1 );

      case 'color':
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;
    }


  }

}
