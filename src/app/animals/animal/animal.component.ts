import { Component, OnInit } from '@angular/core';
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

  filterText:string = "";

  constructor() {
    this.animalsRepository = new AnimalsRepository();
    this.animals = this.animalsRepository.getAnimals();
   }

  ngOnInit(): void {
  }

}
