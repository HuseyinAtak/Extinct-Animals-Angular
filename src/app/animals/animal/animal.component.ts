import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  animals=[
    {id:1,title:"1. Animals",description:"First Animals Description."},
    {id:2,title:"2. Animals",description:"Second Animals Description."},
    {id:3,title:"3. Animals",description:"Third Animals Description."},
    {id:4,title:"4. Animals",description:"Fourth Animals Description."},
    {id:5,title:"5. Animals",description:"Fifth Animals Description."},
  ]

}
