import { fromFetch } from 'rxjs/fetch';
import { Recipe } from '../../Models/Recipe.model';
import { Observable, Subject, take } from 'rxjs';

class RecipeService {
  recipeData$ = new Subject<Recipe>();

  RECIPE_URL = './recipes.json'

  getRecipe(): Observable<Recipe> {
    fromFetch(this.RECIPE_URL, {
      selector: (response) => response.json()
    })
      .pipe(take(1))
      .subscribe((recipeData) => {
        this.recipeData$.next(recipeData);
      })

      return this.recipeData$;
  }
}

export const recipeService = new RecipeService();
