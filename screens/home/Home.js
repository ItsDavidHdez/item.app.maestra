import React from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import * as firebase from "firebase";

const Home = (props) => {
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Log out successful");
        props.navigation.navigate("Login");
      })
      .catch((error) => alert(error));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text>Welcome</Text>
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="Create Item"
          onPress={() => props.navigation.navigate("CreateItem")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="My Inventory"
          onPress={() => props.navigation.navigate("ItemList")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="Create Company"
          onPress={() => props.navigation.navigate("CreateCompany")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="My Company"
          onPress={() => props.navigation.navigate("CompanyList")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="My profile"
          onPress={() => props.navigation.navigate("Profile")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Log out" onPress={() => logOut()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  welcome: {
    display: "flex",
    justifyContent: "center",
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomColor: "#ccc",
  },
});

export default Home;
