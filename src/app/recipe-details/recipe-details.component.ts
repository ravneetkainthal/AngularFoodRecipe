import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Recipe, Ingredient } from '../api.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = Number(params.get('id'));
      console.log('Fetching details for Recipe ID:', recipeId);  // Debugging log
      this.getRecipeDetails(recipeId);
    });
  }

  getRecipeDetails(id: number): void {
    this.apiService.getRecipeById(id).subscribe((recipe: Recipe) => {
      console.log('Recipe data received:', recipe);  // Debugging log
      this.recipe = recipe;
    }, error => {
      console.error('Error fetching recipe details:', error);  // Error log
    });
  }
}
