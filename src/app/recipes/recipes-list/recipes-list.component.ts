import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe("A test Recipe","Description",'https://lazizkhana.com/wp-content/uploads/2015/09/pani-puri.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
