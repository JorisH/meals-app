import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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

const Tabs = createBottomTabNavigator();

const MainTabs = () => (
  <Tabs.Navigator
    initialRouteName="Meals"
    screenOptions={({ route }) => {
      return {
        tabBarActiveTintColor: Colors.accentColor,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      };
    }}
  >
    <Tabs.Screen
      name="Meals"
      component={MealsNavigator}
      options={{ headerShown: false }}
    />
    <Tabs.Screen name="Favorites" component={FavoritesScreen} />
  </Tabs.Navigator>
);

export default MainTabs;
