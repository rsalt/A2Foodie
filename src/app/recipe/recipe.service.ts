import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  //List of Recipe
  private recipes: Recipe[] = [
    new Recipe('recipe List Title', 'Some Dummy Text for My recipe details over internet available for this.','http://www.wfuv.org/sites/default/files/ingredients.jpg', [
      new Ingredient('Panner tikka masala', 300),
      new Ingredient('Mashroom Fry Masala', 400),
    ]),
    new Recipe('recipe List Title', 'Some Dummy Text for My recipe details over internet available for this.','http://www.seriouseats.com/recipes/assets_c/2010/03/20100302-tapas-idiazabal-marinado-thumb-610xauto-76442-thumb-625xauto-76844.jpg', [])
  ];
  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]  = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });
    //setting observable point of firebase ie post reqest for new recipes
    return this.http.put('https://restro-6ab18.firebaseio.com/recipes.json', body,{headers: headers});
  }

    fetchData() {
    return this.http.get('https://restro-6ab18.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}


