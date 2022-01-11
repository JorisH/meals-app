import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/categories.screen';
import CategoryDetailsScreen from '../screens/category-meals.screen';
import MealDetailsScreen from '../screens/meal-details.screen';
import FavoritesScreen from '../screens/favorites.screen';

import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      gestureEnabled: false,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
  >
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ headerTitle: 'Meal Categories' }}
    />
    <Stack.Screen name="CategoryMeals" component={CategoryDetailsScreen} />
    <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
  </Stack.Navigator>
);

// const MealsFavTabNavigator = createBottomTabNavigator({
//   Meals: MealsNavigator,
//   Favorites: FavoritesScreen,
// });

export default MealsNavigator;
