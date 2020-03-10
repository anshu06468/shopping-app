import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient("apple",5),
    new Ingredient("oranges",15)
  ]
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);

  }

}
