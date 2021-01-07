import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import firebase from "../../database/firebase";

const ItemDetails = (props) => {
  const initialState = {
    id: "",
    name: "",
    quantity: "",
    price: "",
  };

  const [item, setItem] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const getItemById = async (id) => {
    const dbRef = firebase.db.collection("items").doc(id);
    const doc = await dbRef.get();
    const item = doc.data();
    setItem({
      ...item,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getItemById(props.route.params.itemId);
  }, []);

  const handleChangeText = (name, value) => {
    setItem({ ...item, [name]: value });
  };

  const deleteItem = async () => {
    const dbRef = firebase.db
      .collection("items")
      .doc(props.route.params.itemId);
    await dbRef.delete();
    props.navigation.navigate("ItemList");
  };

  const updateItem = async () => {
    const dbRef = firebase.db.collection("items").doc(item.id);
    await dbRef.set({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setItem(initialState);
    props.navigation.navigate("ItemList");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Remove the item", "Are you sure?", [
      { text: "Yes", onPress: () => deleteItem() },
      { text: "No", onPress: () => console.log(false) },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          value={item.name}
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Quantity"
          value={item.quantity}
          onChangeText={(value) => handleChangeText("quantity", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Price"
          value={item.price}
          onChangeText={(value) => handleChangeText("price", value)}
        />
      </View>
      <View>
        <Button
          title="Update Item"
          color="#ffcc00"
          onPress={() => updateItem()}
        />
        <Button
          title="Delete Item"
          color="#FF0000"
          onPress={() => openConfirmationAlert()}
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

export default ItemDetails;
