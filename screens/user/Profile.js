import react, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import firebase from "../../database/firebase";

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { firstname, email, phone } = doc.data();
        users.push({
          id: doc.id,
          firstname,
        });
      });
    });
  });

  return (
    <ScrollView>
      <View>
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
