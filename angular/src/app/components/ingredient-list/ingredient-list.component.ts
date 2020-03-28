import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  ingredients: Ingredient[];
  @Input() title: string;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.ingredients;
  }

}
