import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getUser } from "../api";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    //  console.log('User Logged In:', { username, password });
    getUser(username)
      .then((data) => {
        if (data["username"] === username && data["password"] === password) {
          setUser(data);
          navigation.navigate("Account");
        } else {
          setIncorrectLogin(true);
        }
      })
      .catch((err) => {
        setIncorrectLogin(true);
      });
  };

  const tryAgain = () => {
    setIncorrectLogin(false);
  };

  const Register = () => {
    navigation.navigate("Register");
  };

  if (incorrectLogin === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button style={styles.button} title='Login' onPress={handleLogin} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Incorrect Login Details</Text>
        <View style={styles.button}>
          <Button title='Try Login Again' onPress={tryAgain} />

          <Button title='Register' onPress={Register} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    gap: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
