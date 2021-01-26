import React from "react";
import { ScrollView, View, Text, Button } from "react-native";

const Home = (props) => {
  return (
    <ScrollView>
      <View>
        <Text>Home</Text>
      </View>
      <View>
        <Button
          title="Create Item"
          onPress={() => props.navigation.navigate("CreateItem")}
        />
      </View>
      <View>
        <Button
          title="My Inventory"
          onPress={() => props.navigation.navigate("ItemList")}
        />
      </View>
      <View>
        <Button
          title="Create Company"
          onPress={() => props.navigation.navigate("CreateCompany")}
        />
      </View>
      <View>
        <Button
          title="My Company"
          onPress={() => props.navigation.navigate("CompanyList")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
