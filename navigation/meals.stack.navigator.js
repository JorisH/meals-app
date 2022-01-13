import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import CategoriesScreen from '../screens/categories.screen';
import CategoryDetailsScreen from '../screens/category-meals.screen';
import MealDetailsScreen from '../screens/meal-details.screen';

import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const MealsStackNavigator = () => (
  <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleStyle: { fontFamily: 'open-sans-bold' },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryDetailsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  </View>
);

export default MealsStackNavigator;
