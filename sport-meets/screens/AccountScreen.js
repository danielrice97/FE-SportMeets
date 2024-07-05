import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function AccountScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <Button title="User Account" onPress={() => navigation.navigate('UserProfile')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}!</Text>
      <Text>Name: {user.name}</Text>
      <Text>Events Created: {/* Display user's events here */}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 200,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});


