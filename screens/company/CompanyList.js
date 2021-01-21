import React, { useState, useEffect } from "react";
import { ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
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
      {company.map((company, key) => {
        return (
          <ListItem
            key={key}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("CompanyDetails", {
                companyId: company.id,
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
              <ListItem.Title>{company.name}</ListItem.Title>
              <ListItem.Subtitle>{company.email}</ListItem.Subtitle>
              <ListItem.Subtitle>{company.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default CompanyList;
