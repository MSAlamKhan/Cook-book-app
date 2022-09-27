import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const HeaderText = (props) => {
  return <Text style={styles.heading}> {props.children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "boldFont",
    fontSize: 20,
    color : Colors.textColor
  },
});

export default HeaderText;
