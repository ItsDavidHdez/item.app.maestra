import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";

const UserList = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Plis typing the name");
    } else {
      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
        props.navigation.navigate("UserList");
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
          placeholder="Name User"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button
          title="Save User"
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
