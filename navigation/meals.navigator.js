import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/categories.screen';
import CategoryDetailsScreen from '../screens/category-meals.screen';
import MealDetailsScreen from '../screens/meal-details.screen';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryDetailsScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    // mode: 'card',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
