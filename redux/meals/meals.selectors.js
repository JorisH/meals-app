import { createSelector } from 'reselect';

export const getMeals = (state) => state.meals.meals;
export const getFilters = (state) => state.meals.filters;
export const getFavorites = (state) => state.meals.favorites;

export const getFilteredMeals = createSelector(
  getMeals,
  getFilters,
  (meals, filters) =>
    meals.filter((meal) => {
      if (filters.glutenFree && !meal.isGlutenFree) return false;
      if (filters.lactoseFree && !meal.isLactoseFree) return false;
      if (filters.vegatarian && !meal.isVegatarian) return false;
      if (filters.vegan && !meal.isVegan) return false;

      return true;
    })
);
