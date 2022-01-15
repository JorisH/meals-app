export const mealActionTypes = {
  ADD_FAVORITE: 'MEALS_ADD_FAVORITE',
  SET_FILTERS: 'MEALS_SET_FILTER',
};

export const addFavoriteMeal = (meal) => ({
  type: mealActionTypes.ADD_FAVORITE,
  payload: meal,
});

export const setMealsFilter = (filters) => {
  return {
    type: mealActionTypes.SET_FILTERS,
    payload: filters,
  };
};
