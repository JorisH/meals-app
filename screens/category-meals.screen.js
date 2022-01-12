import React, { useLayoutEffect } from 'react';
import MealList from '../components/meal-list/meal-list.component';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryDetailsScreen = (props) => {
  const { navigation, route } = { ...props };
  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return <MealList data={meals} navigation={navigation} />;
};

export default CategoryDetailsScreen;
