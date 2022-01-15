import { View, Text, Switch, Platform } from 'react-native';
import colors from '../../constants/colors';
import DefaultText from '../default-text/default-text.component';
import styles from './filter-switch.styles';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{ false: '#aaa', true: colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? colors.primaryColor : '#fff'}
      />
    </View>
  );
};

export default FilterSwitch;
