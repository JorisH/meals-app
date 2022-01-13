import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/category-grid-tile/category-grid-tile.component';
import HeaderButton from '../components/header-button/header-button.component';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (catData) => {
    const { id, title, color } = catData.item;
    const onPress = () => {
      navigation.navigate('CategoryMeals', {
        categoryId: id,
      });
    };

    return <CategoryGridTile title={title} color={color} onPress={onPress} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meal Categories', // works on android
      headerTitle: 'Meal Categories', // doesn't work on android, only IOS?
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

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;
