import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <Image
        style={styles.circular}
        source={require("../assets/test.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },

  itemText: {
    maxWidth: "80%",
  },

  circular: {
    width: 75,
    height: 100,
    resizeMode: "stretch",
  },
});

export default Task;
