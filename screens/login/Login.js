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
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const auth = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        alert("Log in sucessful");
        props.navigation.navigate("Home");
      })
      .catch(() => {
        alert("Invalid email or password, try again");
        if (user.email === "" || user.password === "") {
          alert("Empty fields");
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.inputTitle}>Email</Text>
      <View>
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <Text style={styles.inputTitle}>Password</Text>
      <View>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={user.password}
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </View>
      <ScrollView style={styles.button}>
        <Button title="Login" onPress={() => auth(user.email, user.password)} />
      </ScrollView>
      <ScrollView style={styles.button}>
        <Button title="Forgot your password?" />
      </ScrollView>
      <ScrollView style={styles.button}>
        <Button
          title="You don't have a account? Register!"
          onPress={() => props.navigation.navigate("Register")}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  inputTitle: {
    fontSize: 10,
  },

  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
    marginBottom: 2,
  },

  button: {
    marginHorizontal: 30,
    borderRadius: 4,
    height: 52,
  },
});

export default Login;
