import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetails from "./screens/UserDetails";
import CreateUser from "./screens/CreateUser";
import UserList from "./screens/UserList";
import CreateCompany from "./screens/company/CreateCompany";
import CompanyDetails from "./screens/company/CompanyDetails";
import CompanyList from "./screens/company/CompanyList";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateCompany"
        component={CreateCompany}
        options={{ title: "Create Company" }}
      />
      <Stack.Screen
        name="CompanyList"
        component={CompanyList}
        options={{ title: "Company List" }}
      />
      <Stack.Screen
        name="CompanyDetails"
        component={CompanyDetails}
        options={{ title: "Company Details" }}
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
