import React from "react";
import { View, Text } from "react-native";

const UserDetails = (props) => {
  console.log(props.route.params.userId);
  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  );
};

export default UserDetails;