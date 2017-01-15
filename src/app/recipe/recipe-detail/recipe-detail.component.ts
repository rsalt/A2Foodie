import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

// Import Recipe Class Defination or Declarations
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list';

@Component({
  selector: 'prod-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number = 1;
  private subscription: Subscription;

  constructor(
      private sls: ShoppingListService, 
      private router: Router, 
      private route: ActivatedRoute, 
      private recipeService: RecipeService) { }

  ngOnInit() {
     this.subscription = this.route.params.subscribe(
        (param: any) => {
          this.recipeIndex = param['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        }
     );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  };

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.router.navigate(['/recipes']);
    this.recipeService.deleteRecipe(this.selectedRecipe);
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
