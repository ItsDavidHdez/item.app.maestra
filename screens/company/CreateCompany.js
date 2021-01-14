import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

const CreateCompany = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    description: "",
    photo: "",
    user_id: "",
    created_at: "",
    updated_at: "",
  });

  const [image, setImage] = useState("");

  const openGalery = async () => {
    const { status } = await Permissions.askAsync();
    console.log(Permissions);
  };

  const checkImage = () => {
    if (image) {
      return (
        <Image style={{ width: 300, height: 300 }} source={{ uri: image }} />
      );
    }
    return null;
  };

  const saveNewCompany = async () => {
    if (state.name === "" || state.email === "") {
      alert("Plis typing in the required fields");
    } else {
      try {
        await firebase.db.collection("companies").add({
          name: state.name,
          email: state.email,
          address: state.address,
          phone: state.phone,
          description: state.description,
          photo: state.photo,
        });
        props.navigation.navigate("UserList");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View>{checkImage()}</View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Address"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Description"
          onChangeText={(value) => handleChangeText("description", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Photo"
          onChangeText={(value) => handleChangeText("photo", value)}
        />
        <Button title="Select a image" onPress={() => openGalery()} />
      </View>
      <View>
        <Button
          title="Save User"
          color="#008000"
          onPress={() => saveNewCompany()}
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

export default CreateCompany;
