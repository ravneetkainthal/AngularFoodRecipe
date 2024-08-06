import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { FormComponent } from './form/form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent }  // New route
];
