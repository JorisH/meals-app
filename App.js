import 'react-native-gesture-handler'; // must be first line!!!!
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import Navigator from './navigation/filters.drawer.navigator';

import * as Font from 'expo-font';

enableScreens();

const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Navigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
