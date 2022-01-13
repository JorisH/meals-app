import IosTabs from './meals.navigator.ios';
import AndroidTabs from './meals.navigator.android';
import { Platform } from 'react-native';

const BottomTabs = Platform.OS === 'android' ? AndroidTabs : IosTabs;

export default BottomTabs;
