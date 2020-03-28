import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private _ingredients: Ingredient[] = []; 

  public addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }

  public removeIngredient(ingredient: Ingredient) {
    this._ingredients = this._ingredients.filter((item) => item != ingredient);
  }

  public get ingredients() {
    return this._ingredients;
  }
}
