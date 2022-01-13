import React, { useLayoutEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/header-button/header-button.component';
import MealList from '../components/meal-list/meal-list.component';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return <MealList data={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
