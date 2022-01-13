import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import FavoritesScreen from '../screens/favorites.screen';
import MealDetailsScreen from '../screens/meal-details.screen';

import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const FavoritesStackNavigator = () => (
  <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator
      initialRouteName="My Favorites"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleStyle: { fontFamily: 'open-sans-bold' },
      }}
    >
      <Stack.Screen
        name="My Favorites"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favorites' }}
      />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  </View>
);

export default FavoritesStackNavigator;
