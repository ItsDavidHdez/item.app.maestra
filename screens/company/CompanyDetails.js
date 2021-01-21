import React, { useState, useEffect } from "react";
import {
  Alert,
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import firebase from "../../database/firebase";

const CompanyDetails = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
    description: "",
    photo: "",
  };

  const [company, setCompany] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const getCompanyById = async (id) => {
    const dbRef = firebase.db.collection("companies").doc(id);
    const doc = await dbRef.get();
    const company = doc.data();
    setCompany({
      ...company,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getCompanyById(props.route.params.companyId);
  });

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteCompany = async () => {
    const dbRef = firebase.db
      .collection("companies")
      .doc(props.route.params.companyId);
    await dbRef.delete();
    props.navigation.navigate("CompanyList");
  };

  const updateCompany = async () => {
    const dbRef = firebase.db.collection("companies").doc(company.id);
    await dbRef.set({
      name: company.name,
      email: company.email,
      description: company.description,
    });
    setCompany(initialState);
    props.navigation.navigate("CompanyList");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Remove the company", "Are you sure?", [
      { text: "Yes", onPress: () => deleteCompany() },
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
          value={company.name}
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          value={company.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Description"
          value={company.description}
          onChangeText={(value) => handleChangeText("description", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Photo"
          value={company.photo}
          onChangeText={(value) => handleChangeText("photo", value)}
        />
      </View>
      <View>
        <Button
          title="Update User"
          color="#ffcc00"
          onPress={() => updateUser()}
        />
        <Button
          title="Delete User"
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

export default CompanyDetails;
