import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderTitle}></Text>
      <Text style={styles.HeaderTitle}>{props.title}</Text>
      <Ionicons
        name="add"
        size={32}
        color="black"
        onPress={() => props.button1("jack")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderRadius: 4,
  },

  HeaderTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
