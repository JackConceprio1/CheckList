import React from "react";
import { View, Text } from "react-native";

export default function ProgressBar() {
  return (
    <View style={{ height: "10%", paddingHorizontal: 10 }}>
      <Text style={{ fontWeight: "bold" }}>Progress</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>10%</Text>
        <Text>100%</Text>
      </View>
    </View>
  );
}
