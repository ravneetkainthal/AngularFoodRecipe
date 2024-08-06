import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] // Proper imports for standalone components
})
export class FormComponent {
  recipeForm: FormGroup;
  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
  submittedRecipes: any[] = [];

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      instructions: ['', Validators.required]
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const recipeData = this.recipeForm.value;
      console.log('Recipe submitted:', recipeData);

      // Add the new recipe to the list of submitted recipes
      this.submittedRecipes.push(recipeData);

      // Reset the form for a new submission
      this.recipeForm.reset();
      this.ingredients.clear();
      this.addIngredient(); // Add one ingredient input by default
    }
  }
}
