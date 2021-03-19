import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import CheckListPage from "./Pages/CheckListPage";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Switch>
          <Route exact path="/CheckListPage" component={CheckListPage}></Route>
          <Route exact path="/" component={HomePage}></Route>{" "}
        </Switch>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
