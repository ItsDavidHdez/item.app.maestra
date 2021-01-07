import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetails from "./screens/UserDetails";
import CreateUser from "./screens/CreateUser";
import UserList from "./screens/UserList";
import CreateItem from "./screens/item/CreateItem";
import ItemList from "./screens/item/ItemList";
import ItemDetails from "./screens/item/ItemDetails";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{ title: "Item details" }}
      />
      <Stack.Screen
        name="CreateItem"
        component={CreateItem}
        options={{ title: "Create item" }}
      />

      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: "User list" }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{ title: "Create user" }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: "User details" }}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{ title: "Item details" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
