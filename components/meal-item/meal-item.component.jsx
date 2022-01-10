import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';

import styles from './meal-item.styles';

const MealItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onPress}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.imageUrl }}
              onError={console.error}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default MealItem;
