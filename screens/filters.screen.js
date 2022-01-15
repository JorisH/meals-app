import React, { useState, useLayoutEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import FilterSwitch from '../components/filter-switch/filter-switch.component';
import HeaderButton from '../components/header-button/header-button.component';
import { setMealsFilter } from '../redux/meals/meals.actions';

const FiltersScreen = ({ navigation }) => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegatarian, setVegatarian] = useState(false);
  const [vegan, setVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const filters = {
      glutenFree: glutenFree,
      lactoseFree: lactoseFree,
      vegatarian: vegatarian,
      vegan: vegan,
    };
    dispatch(setMealsFilter(filters));
  }, [glutenFree, lactoseFree, vegatarian, vegan, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Filters',
      headerTitle: 'My Filters',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={glutenFree}
        onValueChange={setGlutenFree}
      />
      <FilterSwitch
        label="Lactos-free"
        value={lactoseFree}
        onValueChange={setLactoseFree}
      />
      <FilterSwitch
        label="Vegatarian"
        value={vegatarian}
        onValueChange={setVegatarian}
      />
      <FilterSwitch label="Vegan" value={vegan} onValueChange={setVegan} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
});

export default FiltersScreen;
