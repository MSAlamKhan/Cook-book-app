import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons'


import Colors from "../constants/Colors";
import Card from "./Card";

const Mealtem = (props) => {
  return (
      <TouchableOpacity onPress={props.onSelectMeal}>
        <Card style={{...styles.cardStyle,...props.mealitemStyle}}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground 
              source={{uri: props.imageUrl}}
              style={styles.bgImage} >
                <View style={styles.titleContainer} >
                  <Text style={styles.textTitle} >{props.title}</Text>
                </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text style={styles.textDescription} ><Ionicons name="time-outline" size={20} /> {props.duration.toString()}m </Text>
            <Text style={styles.textDescription} ><Ionicons name="briefcase-outline" size={20} /> {props.complexity.toUpperCase()}</Text>
            <Text style={styles.textDescription} ><Ionicons name="cash-outline" size={20} /> {props.affordablity.toUpperCase()}</Text>
          </View>
        </Card>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    width: "100%",
  },

  mealHeader: {
    height: "80%",
  },

  mealDetails: {
    margin : 20,
    justifyContent: "space-between",
  },

 textDescription : {
  color : Colors.textColor,
  fontFamily :'regularFont',
 },

 textTitle : {
  color : Colors.textColor,
  fontFamily :'boldFont',
 },

  bgImage : {
    width : '100%',
    height : '100%'
  },
  titleContainer : {
    width : 150,
    backgroundColor : Colors.primaryColor,
    alignItems : "center"
  }
});

export default Mealtem;
