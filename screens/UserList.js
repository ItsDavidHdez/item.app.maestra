import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate("CreateUser")}
      />
      {users.map((user, key) => {
        return (
          <ListItem
            key={key}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetails", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              rounded
              source={{
                uri: "https://assets.vg247.com/current//2018/04/spiderman.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
