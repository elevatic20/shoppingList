import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [item, setItem] = useState();
  const [shoppingItems, setShoppingItems] = useState([]);

  const handleAddItem = () => {
    Keyboard.dismiss();
    setShoppingItems([...shoppingItems, item]);
    setItem(null);
  };

  const complete = (index) => {
    let itemsCopy = [...shoppingItems];
    itemsCopy.splice(index, 1);

    setShoppingItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Popis za kupnju</Text>

        <View style={styles.items}>
          {shoppingItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => complete(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/*Dodavanje popisa za kupnju */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeListWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Unesi proizvod"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addButton}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  items: {
    marginTop: 100,
  },

  writeListWrapper: {
    position: "absolute",
    top: 135,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addtext: {
    fontSize: 40,
    fontWeight: "100",
  },
});
