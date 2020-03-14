import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
   recipeSelected=new EventEmitter<Recipe>()
   
   private recipes:Recipe[]=[
        new Recipe("Pani poori",
                  "Description",
                  'https://lazizkhana.com/wp-content/uploads/2015/09/pani-puri.jpg',
                  [
                    new Ingredient("bread",1),
                    new Ingredient("meat",1)
                  ]),
        new Recipe("Samosa",
                  "Description",
                  'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg',
                  [
                    new Ingredient("bread",1),
                    new Ingredient("meat",1)
                  ])
      ];

    constructor(private slService:ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
      return this.recipes[index];
    }

    addIngridientsToShoppingList(ingredient:Ingredient[]){
      this.slService.addIngridients(ingredient);
    }
}