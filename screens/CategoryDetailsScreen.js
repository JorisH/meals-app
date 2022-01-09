import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const getCategory = (catId) => CATEGORIES.find((cat) => cat.id === catId);

const CategoryDetailsScreen = (props) => {
  const { navigation } = { ...props };
  const catId = navigation.getParam('categoryId');
  const selectedCategory = getCategory(catId);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryDetailsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = getCategory(catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryDetailsScreen;
