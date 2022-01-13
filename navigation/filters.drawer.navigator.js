import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';

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
    drawerLabel: route.name === 'BottomTabs' ? 'Meals' : 'Filters',
    drawerLabelStyle: { fontFamily: 'open-sans-bold' },
    drawerActiveTintColor: Colors.accentColor,
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
