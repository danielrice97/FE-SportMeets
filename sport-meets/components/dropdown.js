import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet, Text } from "react-native";

const Dropdown = ({category, setCategory}) => {
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
        onValueChange={(value) =>{
          setCategory(value)
        }
        } >
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
    marginRight: 50,
  },
  dropdown: {
    height: 40,
    width: 190,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 30,
    marginLeft: 10,
    borderRadius: 5,
  },
});
export default Dropdown;
