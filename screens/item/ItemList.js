import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../../database/firebase";

const UserList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.db.collection("items").onSnapshot((querySnapshot) => {
      const newItems = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, quantity, unity, photo } = doc.data();
        newItems.push({
          id: doc.id,
          name,
          quantity,
          unity,
          photo,
        });
      });
      setItems(newItems);
    });
  }, []);

  const profilePhoto = (item) => {
    // const cadena = item.photo.slice(-1, -3);
    // console.log(cadena);
    if (item.photo === undefined) {
      return "https://previews.123rf.com/images/suslo/suslo1401/suslo140100021/25250116-bright-dibujo-simple-l%C3%A1piz-sobre-fondo-blanco.jpg";
    }
    return item.photo;
  };

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
              props.navigation.navigate("ItemDetails", {
                itemId: item.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              rounded
              key={key}
              source={{
                uri: profilePhoto(item),
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
