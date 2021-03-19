import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
export default function TodoCard(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.isChecked);
  const [showInfo, setshowInfo] = useState(false);
  var CreatedTime = moment.unix(props["dateCreated"]).format("MM DD YYYY");
  var CompetedTime = moment.unix(props["dateCompeted"]).format("MM DD YYYY");
  return (
    <View style={{ flex: 1 }}>
      {/* this will have a title and a icon */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <View style={styles.card}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.cardText}>{props.text}</Text>
        </View>
        <Ionicons
          name={!showInfo ? "chevron-down" : "chevron-up"}
          size={20}
          color="black"
          onPress={() => setshowInfo(!showInfo)}
        />
      </View>
      {showInfo ? (
        <View
          style={{
            paddingHorizontal: 5,
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={styles.time}>Created: {CreatedTime.toString()}</Text>
            <Text style={styles.time}>Competed: {CompetedTime.toString()}</Text>
          </View>
          <Text style={styles.note}>Note: </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            aperiam quidem consequuntur. Facilis asperiores, facere sit saepe
            architecto ipsam est.
          </Text>
          <Text>Key: {props.Key}</Text>
          <Button
            title="hello world"
            onPress={() => props.UpdateTodo(props.Key)}
          ></Button>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    fontSize: 15,
  },
  note: {
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardText: {
    fontSize: 22,
    textAlign: "center",
  },
});
