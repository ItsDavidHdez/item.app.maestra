import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../../database/firebase";

const UserList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.db.collection("items").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, quantity, unity } = doc.data();
        items.push({
          id: doc.id,
          name,
          quantity,
          unity,
        });
      });
      setItems(items);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create item"
        onPress={() => props.navigation.navigate("CreateItem")}
      />
      {items.map((item, key) => {
        return (
          <ListItem
            key={key}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("ItemDetail", {
                itemId: item.id,
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
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.quantity}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
