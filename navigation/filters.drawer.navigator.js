import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomTabs from './meals.navigator';
import FiltersScreen from '../screens/filters.screen';
import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();
const FilterStack = () => (
  <Stack.Navigator
    initialRouteName="Filters"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitleStyle: { fontFamily: 'open-sans-bold' },
    }}
  >
    <Stack.Screen
      name="Filters"
      component={FiltersScreen}
      options={{
        headerTitle: 'My Filters',
      }}
    />
  </Stack.Navigator>
);

const drawerScreenOptions = ({ route }) => {
  return {
    drawerActiveTintColor: Colors.accentColor,
    drawerIcon: ({ focused, color }) => {
      let iconName;

      if (route.name === 'BottomTabs') {
        iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
      } else if (route.name === 'MyFilters') {
        iconName = focused ? 'ios-options' : 'ios-options-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={23} color={color} />;
    },
    drawerLabel: route.name === 'BottomTabs' ? 'Meals' : 'Filters',
    drawerLabelStyle: { fontFamily: 'open-sans-bold' },
  };
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="BottomTabs"
    screenOptions={drawerScreenOptions}
  >
    <Drawer.Screen
      name="BottomTabs"
      component={BottomTabs}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="MyFilters"
      component={FilterStack}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
