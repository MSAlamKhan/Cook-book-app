import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const ListDisplay = (props) => {
  return (
    <View style={styles.window}>
      {props.Data.map((item) => (
        <View style={styles.hr}>
<Text style={styles.text}>
          {item}
        </Text>
            </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    margin: 10,
    padding: 5,
  },
  hr: {
    margin : 5,
    padding : 10,
    borderBottomColor: Colors.textColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontFamily: "regularFont",
    color: Colors.textColor,
    fontSize: 15,
  },
});

export default ListDisplay;
