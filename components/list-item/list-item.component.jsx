import React from 'react';
import { View, Text } from 'react-native';

import styles from './list-item.styles';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

export default ListItem;
