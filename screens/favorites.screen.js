import React from 'react';
import MealList from '../components/meal-list/meal-list.component';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealList data={favoriteMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
