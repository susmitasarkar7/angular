import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialstate = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]        
};

export function shoppingListReducer(state = initialstate, action:ShoppingListActions
    .ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
            default:
                return state;
    }
}