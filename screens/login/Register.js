import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import * as firebase from "firebase";

const Login = (props) => {
  const [userRegister, setUserRegister] = useState({
    firstname: "",
    lastname: "",
    position: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
  });

  const handleChangeText = (name, value) => {
    setUserRegister({ ...userRegister, [name]: value });
  };

  const register = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Successful registration", user);
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("An error occurred while registering");
      });
  };

  const saveNewUser = async () => {
    if (
      userRegister.firstname === "" ||
      userRegister.lastname === "" ||
      userRegister.email === "" ||
      userRegister.password === ""
    ) {
      alert("Plis typing the name");
    } else {
      try {
        await firebase.db.collection("users").add({
          firstname: userRegister.firstname,
          lastname: userRegister.lastname,
          position: userRegister.position,
          email: userRegister.email,
          password: userRegister.password,
          phone: userRegister.phone,
          photo: userRegister.photo,
        });
        props.navigation.navigate("UserList");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text>First Name*</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.firstname}
          onChangeText={(value) => handleChangeText("firstname", value)}
        />
      </View>
      <Text>Last Name*</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.lastname}
          onChangeText={(value) => handleChangeText("lastname", value)}
        />
      </View>
      <Text>Position</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.position}
          onChangeText={(value) => handleChangeText("position", value)}
        />
      </View>
      <Text>Email*</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <Text>Password*</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.password}
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </View>
      <Text>Phone</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.phone}
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <Text>Photo</Text>
      <View style={styles.inputGroup}>
        <TextInput
          value={userRegister.photo}
          onChangeText={(value) => handleChangeText("photo", value)}
        />
      </View>
      <ScrollView>
        <Button
          title="Register!"
          onPress={() => register(userRegister.email, userRegister.password)}
        />
      </ScrollView>
      <ScrollView>
        <Button title="Log in" />
      </ScrollView>
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

export default Login;
