import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientsChanged=new EventEmitter<Ingredient[]>()
    private ingredients:Ingredient[]=[
        new Ingredient("apple",5),
        new Ingredient("oranges",15)
      ]

    getIngredients(){
        return this.ingredients.slice();
    }

    pushIngredients(inger:Ingredient){
        this.ingredients.push(inger);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngridients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}