import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Animals } from 'src/app/models/animal';
import { AnimalsRepository } from 'src/app/models/animal.repository';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animals: Animals[];
  animalsRepository:AnimalsRepository;
  filteredAnimals : Animals[];

  filterText:string = "";

  constructor() {
    this.animalsRepository = new AnimalsRepository();
    this.animals = this.animalsRepository.getAnimals();
    this.filteredAnimals = this.animals;
   }

  ngOnInit(): void {
  }
  onInputChange(){
    this.filteredAnimals = this.filterText?
    this.animals.filter(a=> a.title.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 || 
    a.description.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1) : this.animals;
  }

addToList($event : any, animal : Animals){
  if($event.target.classList.contains('btn-outline-primary')){
    $event.target.innerText = 'Okuma Listesinden Cikar';
    $event.target.classList.remove('btn-outline-primary');
    $event.target.classList.add('btn-outline-danger');
  } else{
    $event.target.innerText = 'Okuma Listesine Ekle';
    $event.target.classList.remove('btn-outline-danger');
    $event.target.classList.add('btn-outline-primary');
    
  }
}
}
