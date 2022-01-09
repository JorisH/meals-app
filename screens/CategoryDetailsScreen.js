import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Details Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryDetailsScreen;
