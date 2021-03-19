import Header from "../Components/Header";
import React, { Component, setState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  Text,
} from "react-native";
import TodoCard from "../Components/TodoCard";
import ListContainer from "../Components/ListContainer";
import ProgressBar from "../Components/ProgressBar";
import { v4 as uuidv4 } from "uuid";
// import { Ionicons } from "@expo/vector-icons";

export default function CheckListPage() {
  var todoList = [];
  function createTodo(params) {
    dic = { id: uuidv4(), title: "make Bed" };
    console.log("click");
    todoList.push(dic);
    console.log(todoList);
  }
  return (
    <View style={styles.container}>
      <Header title={"Game's 1 todo"} button1={createTodo}></Header>
      <ScrollView style={styles.scrollView}>
        {todoList.forEach((element) => {
          console.log(element);
          return <TodoCard title={element["title"]}></TodoCard>;
        })}
      </ScrollView>
      <ProgressBar></ProgressBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
