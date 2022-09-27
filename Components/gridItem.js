import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Card from "./Card";

const GridItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.routeHandler}>
      <Card
        style={{
          ...{ borderColor: props.Cardcolor, backgroundColor: props.Cardcolor },
          ...props.style,
        }}
      >
        <Text
          style={{
            color: Colors.textColor,
            fontFamily: "boldFont",
            fontSize: 15,
          }}
        >
          {props.children}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
});

export default GridItem;
