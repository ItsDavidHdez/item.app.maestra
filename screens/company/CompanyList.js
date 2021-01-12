import React, { useState, useEffect } from "react";
import { ScrollView, Button } from "react-native";
import firebase from "../../database/firebase";

const CompanyList = (props) => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    firebase.db.collection("companies").onSnapshot((querySnapshot) => {
      const company = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, description, photo } = doc.data();
        company.push({
          id: doc.id,
          name,
          email,
          description,
          photo,
        });
      });
      setCompany(company);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create Company"
        onPress={() => props.navigation.navigate("CreateCompany")}
      />
    </ScrollView>
  );
};

export default CompanyList;
