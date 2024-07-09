import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { getAllCategories } from "../api";

const Dropdown = ({ category, setCategory }) => {
  const [updateCategories, setUpdateCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setUpdateCategories(categories);
    });
  }, []);

  return (
    <View>
      <Text
        style={styles.search}
        aria-label='Label for Username'
        id='labelUsername'>
        Choose a sport
      </Text>
      <Picker
        style={styles.dropdown}
        selectedValue={category}
        onValueChange={(value) => {
          setCategory(value);
        }}>
        <Picker.Item label='Select' value='select' />
        {updateCategories.map((categoryObject, index) => {
          return (
            <Picker.Item
              key={index}
              label={categoryObject.event_category}
              value={categoryObject.event_category}
            />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  dropdown: {
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
});
export default Dropdown;
