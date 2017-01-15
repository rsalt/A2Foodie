import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'prod-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  //List of Recipe
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('recipe List Title', 'Some Dummy Text for My recipe details over internet available for this.','http://www.wfuv.org/sites/default/files/ingredients.jpg');

  //inject recipe services to access recipe list
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
