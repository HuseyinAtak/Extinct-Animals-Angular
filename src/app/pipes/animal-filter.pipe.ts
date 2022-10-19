import { Pipe, PipeTransform } from '@angular/core';
import { Animals } from '../models/animal';
@Pipe({
  name: 'animalFilter'
})
export class AnimalFilterPipe implements PipeTransform {

  transform(animals : Animals[], filterText:string ): Animals[] {
    filterText = filterText.toLowerCase();


    return filterText? animals.filter((a: Animals) => 
    a.title.toLowerCase().indexOf(filterText) !== -1 || a.description.toLowerCase().indexOf(filterText) !== -1) : animals;
  }

}
