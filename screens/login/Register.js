import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

const Login = () => {
  const [userRegister, setUserRegister] = useState({
    firstname: "",
    lastname: "",
    position: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
  });

  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <Text>Email</Text>
        <View>
          <TextInput value={userRegister.email} />
        </View>
      </ScrollView>
      <ScrollView>
        <Text>Password</Text>
        <View>
          <TextInput value={userRegister.password} />
        </View>
      </ScrollView>
      <ScrollView>
        <Button title="Forgot your password?" />
      </ScrollView>
      <ScrollView>
        <Button title="You don't have a account? Register!" />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Login;
