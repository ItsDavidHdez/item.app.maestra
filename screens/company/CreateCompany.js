import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

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

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
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
