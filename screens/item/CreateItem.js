import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../../database/firebase";

const UserList = (props) => {
  const [state, setState] = useState({
    code: "",
    name: "",
    marca: "",
    price: "",
    quantity: "",
    unity: "",
    category: "",
    description: "",
    photo: "",
    date: "",
  });

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Plis typing the name");
    } else {
      try {
        await firebase.db.collection("items").add({
          code: state.code,
          name: state.name,
          marca: state.marca,
          price: state.price,
          quantity: state.quantity,
          unity: state.quantity,
          category: state.category,
          description: state.description,
          photo: state.photo,
          date: state.date,
        });
        props.navigation.navigate("ItemList");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Code"
          onChangeText={(value) => handleChangeText("code", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Marca"
          onChangeText={(value) => handleChangeText("marca", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Price"
          onChangeText={(value) => handleChangeText("price", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Quantity"
          onChangeText={(value) => handleChangeText("quantity", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Unity"
          onChangeText={(value) => handleChangeText("unity", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Category"
          onChangeText={(value) => handleChangeText("category", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Description"
          onChangeText={(value) => handleChangeText("description", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Photo"
          onChangeText={(value) => handleChangeText("photo", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Date"
          onChangeText={(value) => handleChangeText("date", value)}
        />
      </View>
      <View>
        <Button
          title="Save Item"
          color="#008000"
          onPress={() => saveNewUser()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomColor: "#ccc",
  },
});

export default UserList;
