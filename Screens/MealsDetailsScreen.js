import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../Components/HeaderButton";
import Colors from "../constants/Colors";
import HeaderText from "../Components/HeadingText";
import ListDisplay from "../Components/listDisplay";
import { toggleFavorite } from "../store/actions/meals";

const MealsDetailsScreen = (props) => {
  const mealId = props.route.params.mealId;
  const mealIsFavorite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );
  const avaliableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = avaliableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setParams({
      isFave : mealIsFavorite
    })
  },[mealIsFavorite])

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(mealId));
  };

  const headerStyling = () => {
    const mealIsFav = props.route.params.isFave;
    props.navigation.setOptions({
      title: props.route.params.mealTitle,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favourite"
            iconName =  {mealIsFav ? "md-heart" : 'md-heart-outline'}
            onPress={toggleFavoriteHandler}
          />
        </HeaderButtons>
      ),
    });
  };

  useLayoutEffect(headerStyling);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />
      <View style={styles.rowView}>
        <Text style={styles.textDescription}>
          <Ionicons name="time-outline" size={20} />{" "}
          {selectedMeal.duration.toString()}m{" "}
        </Text>
        <Text style={styles.textDescription}>
          <Ionicons name="briefcase-outline" size={20} />{" "}
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.textDescription}>
          <Ionicons name="cash-outline" size={20} />{" "}
          {selectedMeal.affordablity.toUpperCase()}
        </Text>
      </View>
      <View style={styles.instructionsView}>
        <HeaderText>Ingredients</HeaderText>
        <ListDisplay Data={selectedMeal.ingerdients} />

        <HeaderText>Steps</HeaderText>
        <ListDisplay Data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: { width: "100%", height: 250 },
  rowView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#d3d3d3",
  },
  textDescription: {
    color: Colors.textColor,
    fontFamily: "regularFont",
  },
  instructionsView: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MealsDetailsScreen;
