import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Colors from "../constants/Colors";
import GridItem from "../Components/gridItem";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = (props) => {




  const renderGridIem = (itemData) => {
    return (
      <GridItem
        style={styles.gridItemStyle}
        Cardcolor={itemData.item.color}
        routeHandler={() => {
          props.navigation.navigate({
            name: "CategoryMeals",
            params: { categoryID: itemData.item.id, categoryTitle : itemData.item.title },
          });
        }}
      >
        {itemData.item.title}
      </GridItem>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridIem}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGroundColor,
  },
  gridItemStyle: {
    height: 150,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default CategoriesScreen;
