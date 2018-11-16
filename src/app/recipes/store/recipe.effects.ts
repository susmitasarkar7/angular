import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from "../recipe.model";
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpclient.get<Recipe[]>('https://my-recipe-book-j397.firebaseio.com/recipes.json', {
            observe : 'body',
            responseType : 'json'
          })
    })
    .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
              type: RecipeActions.SET_RECIPES,
              payload: recipes
          };
        }
      );

      @Effect({dispatch:false})
      recipeStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .withLatestFrom(this.Store.select('recipes'))
      .switchMap(([action, state]) => {
        const req = new HttpRequest ( 'PUT', 'https://my-recipe-book-j397.firebaseio.com/recipes.json',
        state.recipes, {reportProgress: true})
        return this.httpclient.request(req);
      });

    constructor(private actions$: Actions,
                private httpclient: HttpClient,
                private Store: Store<fromRecipe.FeatureState>) {}    
}