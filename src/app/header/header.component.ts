import { RecipeService } from './../recipe/recipe.service';
import { Component } from '@angular/core';


@Component({
  selector: 'prod-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { 
  }
  onStore(){
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  onFetch(){
    this.recipeService.fetchData();
  }

}
