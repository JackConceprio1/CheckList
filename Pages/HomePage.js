import Header from "../Components/Header";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import HomePageCard from "../Components/HomePageCard";

export default function HomePage(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Todo List's"}></Header>
      <View>
        {/* <Text>Hello world</Text> */}
        <ScrollView style={styles.scrollView}>
          <HomePageCard title={"Game 1"}></HomePageCard>
          <HomePageCard title={"Game 2"}></HomePageCard>
          <HomePageCard title={"Game 3"}></HomePageCard>
          <HomePageCard title={"Game 4"}></HomePageCard>
          <HomePageCard title={"Game 5"}></HomePageCard>
          <HomePageCard title={"Game 6"}></HomePageCard>
          <HomePageCard title={"Game 7"}></HomePageCard>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderRadius: 4,
  },
});
