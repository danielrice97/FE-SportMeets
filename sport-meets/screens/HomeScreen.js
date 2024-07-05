import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Dropdown from "../components/dropdown";
import SportCards from "../components/eventCards";
import { Input } from "@rneui/themed";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>SportMeets</Text>
      <Text
        style={styles.search}
        aria-label='Label for Username'
        nativeID='labelUsername'>
        Search a sport by location
      </Text>
      <View style={styles.container}>
        <Input placeholder='BASIC INPUT' />
        <TextInput
          type='text'
          id='input'
          name='name'
          aria-label='input'
          aria-labelledby='labelUsername'
          style={styles.input}
          defaultValue='Search by location!'
        />
        <Dropdown />
      </View>
      <SportCards navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: 190,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 30,
    marginLeft: 10,
    borderRadius: 5,
  },

  search: {
    marginLeft: 10,
  },
});
