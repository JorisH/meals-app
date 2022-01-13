import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MealsStackNavigator from './meals.stack.navigator';
import FavoritesStackNavigator from './favorites.stack.navigator';

import Colors from '../constants/colors';

const Tabs = createMaterialBottomTabNavigator();

const tabScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color }) => {
      let iconName;

      if (route.name === 'Meals') {
        iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
      } else if (route.name === 'Favorites') {
        iconName = focused ? 'ios-star' : 'ios-star-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={23} color={color} />;
    },
    tabBarColor:
      route.name === 'Meals' ? Colors.primaryColor : Colors.accentColor,
  };
};

const AndroidTabs = () => (
  <Tabs.Navigator
    initialRouteName="Meals"
    screenOptions={tabScreenOptions}
    activeColor="#fff"
    barStyle={{ backgroundColor: Colors.primaryColor }} // used when shifting={false}
    shifting={true}
    labeled={false}
  >
    <Tabs.Screen
      name="Meals"
      component={MealsStackNavigator}
      options={{ headerShown: false }}
    />
    <Tabs.Screen
      name="Favorites"
      component={FavoritesStackNavigator}
      options={{ headerShown: false }}
    />
  </Tabs.Navigator>
);

export default AndroidTabs;
