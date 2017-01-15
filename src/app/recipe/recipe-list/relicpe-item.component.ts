import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'prod-relicpe-item',
  templateUrl: './relicpe-item.component.html',
  styles: []
})
export class RelicpeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
