import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { tap,map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class RecipeStorageService {

  constructor(private http: HttpClient, private recipeservice: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeservice.getRecipes();
    //put overide the existing data over database
    this.http.put("https://ng-courseshoppinglist.firebaseio.com/recipes.json", recipes)
      .subscribe(response => {
        console.log(response);
      })
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>("https://ng-courseshoppinglist.firebaseio.com/recipes.json")
      .pipe(
        map(response => {
         return response.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        })
      })
      ,tap(recipes=>{
        this.recipeservice.setRecipes(recipes)
      })
      )
      
  }
}
