import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit';

export const RECIPE_ROUTES: Routes = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
];

export const recipes = RouterModule.forRoot(RECIPE_ROUTES);

