import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/default-text/default-text.component';
import HeaderButton from '../components/header-button/header-button.component';
import ListItem from '../components/list-item/list-item.component';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = (props) => {
  const { navigation, route } = props;
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="favorite" iconName="ios-star" onPress={() => {}} />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedMeal]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default MealDetailsScreen;
