import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet, Text } from "react-native";

const Dropdown = ({ category, setCategory }) => {
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
        <Picker.Item label='Football' value='football' />
        <Picker.Item label='Basketball' value='basketball' />
        <Picker.Item label='Hockey' value='hockey' />
        <Picker.Item label='Golf' value='Golf' />
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
