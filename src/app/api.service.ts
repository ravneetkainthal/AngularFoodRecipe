import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
// Define the Recipe interface
export interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
  extendedIngredients: Ingredient[];  
}

// Define the RecipesResponse interface
export interface RecipesResponse {
  recipes: Recipe[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.spoonacular.com/recipes/';
  private apiKey = 'c2c08b4100e04bc7b9f5913726d44dd8'; // Your API key

  constructor(private http: HttpClient) {}

  // Method to get random recipes
  getRandomRecipes(count: number = 10): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(`${this.apiUrl}random?number=${count}&apiKey=${this.apiKey}`);
  }

  // Method to get recipe details by ID
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}${id}/information?apiKey=${this.apiKey}`);
  }
}
