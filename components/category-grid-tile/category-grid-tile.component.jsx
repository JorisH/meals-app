import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import styles from './category-grid-tile.styles';

const CategoryGridTile = ({ title, color, onPress }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={onPress}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default CategoryGridTile;
