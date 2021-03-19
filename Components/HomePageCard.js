import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomePageCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.title}</Text>
      <Ionicons name="arrow-forward-sharp" size={20} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardText: {
    fontSize: 15,
  },
});
