import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MealItem from "../Components/mealItem";
import Colors from "../constants/Colors";

const MealsList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        mealitemStyle={styles.mealItemstyle}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordablity={itemData.item.affordablity}
        imageUrl={itemData.item.imageURL}
        onSelectMeal={() => {
          props.navigation.navigate({
            name: "MealsDetails",
            params: {
              mealTitle: itemData.item.title,
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      style={{ margin: 10 }}
      data={props.data}
      renderItem={renderMealItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mealItemstyle: {
    height: 250,
    borderColor: Colors.textColor,
  },
});

export default MealsList;
