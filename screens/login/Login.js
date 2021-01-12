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
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <Text>Email</Text>
        <View>
          <TextInput value={user.email} />
        </View>
      </ScrollView>
      <ScrollView>
        <Text>Password</Text>
        <View>
          <TextInput value={user.password} />
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
