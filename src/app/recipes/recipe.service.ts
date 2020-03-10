import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
   recipeSelected=new EventEmitter<Recipe>()
   
   private recipes:Recipe[]=[
        new Recipe("Pani poori","Description",'https://lazizkhana.com/wp-content/uploads/2015/09/pani-puri.jpg'),
        new Recipe("Samosa","Description",'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}