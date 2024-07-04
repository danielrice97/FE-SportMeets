import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("choose");

  return (
    <View>
      <Text
        style={styles.search}
        aria-label='Label for Username'
        nativeID='labelUsername'>
        Choose a sport
      </Text>

      <Picker
        style={styles.dropdown}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label='football' value='football' />
        <Picker.Item label='basketball' value='basketball' />
        <Picker.Item label='hockey' value='hockey' />
        <Picker.Item label='golf' value='golf' />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginRight: 10,
  },
  dropdown: {
    maxWidth: "100%",
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default Dropdown;
