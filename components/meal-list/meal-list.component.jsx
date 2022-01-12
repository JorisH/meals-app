import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './meal-list.styles';

import MealItem from '../meal-item/meal-item.component';

const MealList = ({ data, navigation }) => {
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
        data={data}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;
