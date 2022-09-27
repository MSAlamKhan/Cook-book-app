import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { useSelector } from "react-redux";



import MealsList from "../Components/MealsList";

const CategoryMealsScreen = (props) => {


  const cID = props.route.params.categoryID;

  const avaliableMeals = useSelector(state => state.meals.filteredMeals)
  const displayMeals = avaliableMeals.filter((meal) => meal.categoryID.indexOf(cID) >= 0);

 if (displayMeals.length === 0) {
   return (
    <View style={styles.fallbackTextContainer}>
      <Text style={styles.fallbackText}>
        No Meals Found - Check Filters Maybe?
      </Text>
    </View>
   )
 }
 else {
   
     return (
     <MealsList data={displayMeals} navigation={props.navigation}/>
     );

 }
};


const styles = StyleSheet.create({
  fallbackTextContainer : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center"
  },
  fallbackText : {
      fontSize : 20,
      fontFamily : 'regularFont'
  }
  })

export default CategoryMealsScreen;
