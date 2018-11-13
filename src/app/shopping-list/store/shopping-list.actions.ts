import { Action } from "@ngrx/store";

import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'; 

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENTS;
    payload: Ingredient;
}

export type ShoppingListActions = AddIngredient;
