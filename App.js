import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetails from "./screens/user/UserDetails";
import CreateUser from "./screens/user/CreateUser";
import UserList from "./screens/user/UserList";
import Login from "./screens/login/Login";
import Register from "./screens/login/Register";
import CreateItem from "./screens/item/CreateItem";
import ItemList from "./screens/item/ItemList";
import ItemDetails from "./screens/item/ItemDetails";
import Home from "./screens/home/Home";
import CreateCompany from "./screens/company/CreateCompany";
import CompanyDetails from "./screens/company/CompanyDetails";
import CompanyList from "./screens/company/CompanyList";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
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
        name="CreateCompany"
        component={CreateCompany}
        options={{ title: "Create Company" }}
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
