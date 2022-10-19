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

}
