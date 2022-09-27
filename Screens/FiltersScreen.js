
import React, {useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {useDispatch} from 'react-redux'

import CustomHeaderButton from "../Components/HeaderButton";
import HeaderText from "../Components/HeadingText";
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.fliters}>
      <Text style={styles.lables}>{props.children}</Text>
      <Switch
        trackColor={{ true: Colors.accentColor, false: Colors.textColor }}
        thumbColor={Colors.primaryColor}
        value={props.value}
        onValueChange={(newValue) => props.handler(newValue)}
      />
    </View>
  );
};

const FiltersScreen = (props) => {

 

  const headerConfig = () => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="save"
            onPress={saveFilters}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              props.navigation.openDrawer();
            }} 
          />
        </HeaderButtons>
      ),
    });
  };

  useLayoutEffect(() => {
    headerConfig();
  });

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = () => {
    
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    }
    dispatch(setFilters(appliedFilters))
    console.log(appliedFilters);
    
  };

  return (
    <View style={styles.window}>
      <HeaderText>Avaliable Filters</HeaderText>
      <FilterSwitch handler={setIsGlutenFree} value={isGlutenFree}>
        Gluten-Free
      </FilterSwitch>
      <FilterSwitch handler={setIsVegan} value={isVegan}>
        Vegan
      </FilterSwitch>
      <FilterSwitch handler={setIsVegetarian} value={isVegetarian}>
        Vegetarian
      </FilterSwitch>
      <FilterSwitch handler={setIsLactoseFree} value={isLactoseFree}>
        Lactose-Free
      </FilterSwitch>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    margin: 20,
    textAlign: "center",
  },
  lables: {
    fontFamily: "regularFont",
    fontSize: 18,
    color: Colors.textColor,
  },
  fliters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FiltersScreen;
