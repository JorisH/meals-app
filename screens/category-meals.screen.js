import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/meal-item/meal-item.component';

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

  const renderMealItem = (mealData) => {
    const { title, duration, complexity, affordability, imageUrl } =
      mealData.item;

    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onPress={() => {
          navigation.navigate('MealDetails', { mealId: mealData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        data={meals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default CategoryDetailsScreen;
