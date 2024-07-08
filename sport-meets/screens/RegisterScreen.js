import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { postUser } from '../api';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const {setUser} =  useContext(UserContext)


  const handleSetName = (localname) => {
    setName(localname)
  }

  const handleSetUsername = (localusername) => {
    setUsername(localusername)
  }

  const handleSetPassword = (localpassword) => {
    setPassword(localpassword)
  }

  const handleSetAvatarURL = (localAvatarURL) => {
    setAvatarURL(localAvatarURL)
  }

  const handleRegister = () => {
    newUser = {
      "avatar_url": avatarURL,
      "name": name,
      "password": password,
      "username": username
    }

    postUser(newUser).then(() => {
      setUser(newUser)
      navigation.navigate('Account')
    })
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleSetName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleSetUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handleSetPassword}
        secureTextEntry
      />
            <TextInput
        style={styles.input}
        placeholder="Avatar URL"
        value={avatarURL}
        onChangeText={handleSetAvatarURL}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});


