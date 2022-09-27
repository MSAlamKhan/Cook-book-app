import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { useSelector } from "react-redux";

import MealsList from "../Components/MealsList";

const FavouriteScreen = props => {

    const favMeals= useSelector(state => state.meals.favouriteMeals)



    if (favMeals.length === 0 || !favMeals) {
        return (

            <View style={styles.fallbackTextContainer}>
                <Text style={styles.fallbackText}>
                    No Favourites Yet - Start adding some!!
                </Text>
            </View>
        )


    } else {
        return(
            
            <MealsList data={favMeals} navigation={props.navigation} />
        );
        
    }
}

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

export default FavouriteScreen;