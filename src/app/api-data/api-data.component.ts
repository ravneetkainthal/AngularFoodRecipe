import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { ApiService, Recipe, RecipesResponse } from '../api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],  // Include RouterModule
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchRecipes(24); // Fetch 20 recipes
  }

  fetchRecipes(count: number): void {
    this.apiService.getRandomRecipes(count).subscribe((response: RecipesResponse) => {
      this.recipes = response.recipes;  // Access the recipes array
    });
  }
}
