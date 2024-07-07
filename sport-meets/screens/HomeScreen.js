import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Dropdown from "../components/dropdown";
import SportCards from "../components/eventCards";
import { Input } from "@rneui/themed";
import SocketComponent from "../components/socketIo";

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState("");
  return (
    <ScrollView>
      <Text style={styles.text}>SportMeets</Text>
      <Text
        style={styles.search}
        aria-label='Label for Username'
        nativeID='labelUsername'>
        Search a sport by location
      </Text>
      <View style={styles.container}>
        <Input
          placeholder='Search By Location'
          type='text'
          id='input'
          name='name'
          aria-label='input'
          aria-labelledby='labelUsername'
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
        <Dropdown category={category} setCategory={setCategory} />
      </View>
      <SocketComponent />
      <SportCards navigation={navigation} category={category} />
    </ScrollView>
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
