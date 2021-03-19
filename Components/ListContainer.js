import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props["title"]}:</Text>
      <View style={styles.subList}>{props["listItems"]}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    borderColor: "black",
  },
  subList: {
    // paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
