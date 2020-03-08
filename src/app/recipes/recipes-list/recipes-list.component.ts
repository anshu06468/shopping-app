import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelectd=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Pani poori","Description",'https://lazizkhana.com/wp-content/uploads/2015/09/pani-puri.jpg'),
    new Recipe("Samosa","Description",'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelectd.emit(recipe);
  }

}
