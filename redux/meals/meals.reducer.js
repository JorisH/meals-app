import { MEALS } from '../../data/dummy-data';
import { mealActionTypes } from './meals.actions';

const INITIAL_STATE = {
  meals: MEALS,
  filters: {},
  favorites: [],
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mealActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case mealActionTypes.ADD_FAVORITE:
      const { favorites } = state;
      favorites.push(action.payload);
      return {
        ...state,
        favorites: [...new Set(favorites)],
      };
    default:
      return state;
  }
};

export default mealsReducer;
