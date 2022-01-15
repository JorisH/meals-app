import React, { useLayoutEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/header-button/header-button.component';
import MealList from '../components/meal-list/meal-list.component';
import { getFavorites } from '../redux/meals/meals.selectors';

const FavoritesScreen = ({ navigation }) => {
  const { favoriteMeals } = useSelector((state) => ({
    favoriteMeals: getFavorites(state),
  }));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Favorite Meals',
      headerTitle: 'My Favorite Meals',
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
