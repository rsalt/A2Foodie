//import { provideRoutes } from '@angular/router';
//Import Angular component
import { RouterModule, Routes } from '@angular/router';
// Import Custom componenents
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RECIPE_ROUTES } from './recipe/recipes.route';


export const APP_ROUTE:Routes  = [
        //github router refrance 
        { path: 'A2Foodie/dist', redirectTo: 'recipes', pathMatch: 'full' },
         //{ path: '', redirectTo: 'recipes', pathMatch: 'full' },
        { path: 'recipes', component: RecipeComponent, children: RECIPE_ROUTES },
        { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTE);
