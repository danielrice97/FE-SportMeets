import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import SportCards from "../components/SportCards";
import { Input } from "@rneui/themed";
// import MapView from "react-native-maps";

export default function HomeScreen({ navigation }) {
  const [category, setCategory] = useState("select");
  const [location, setLocation] = useState("");

  return (
    <ScrollView>
      <Text style={styles.headerText}>SportMeets</Text>
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

      {/* <MapView style={styles.map} /> */}

      <SportCards navigation={navigation} category={category} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  headerText: {
    color: "#1e90ff",
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  search: {
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
