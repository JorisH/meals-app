import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/category-grid-tile/category-grid-tile.component';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderGridItem = (catData) => {
    const { id, title, color } = catData.item;
    const onPress = () => {
      props.navigation.navigate('CategoryMeals', {
        categoryId: id,
      });
    };

    return <CategoryGridTile title={title} color={color} onPress={onPress} />;
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
