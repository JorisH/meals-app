import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/default-text/default-text.component';

import MealList from '../components/meal-list/meal-list.component';
import { CATEGORIES } from '../data/dummy-data';
import { getFilteredMeals } from '../redux/meals/meals.selectors';

const CategoryDetailsScreen = (props) => {
  const { navigation, route } = { ...props };
  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const { filteredMeals } = useSelector((state) => ({
    filteredMeals: getFilteredMeals(state),
  }));
  const meals = filteredMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <DefaultText>No meals... maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList data={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryDetailsScreen;
