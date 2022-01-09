import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryDetails: CategoryDetailsScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    // mode: 'card',
    defaultNavigationOptions: {      
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    },
  }
);

export default createAppContainer(MealsNavigator);
