import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = ["All Animals","Land Animals", "Sea Animals","Flying Animals"]
  constructor() { }

  ngOnInit(): void {
  }

}
