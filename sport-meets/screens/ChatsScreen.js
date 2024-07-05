import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

const testEventChats = [
  {
    event_id: 1,
    event_name: "Football with the boys",
    created_at: "13-07-2024 14:00:00",
    event_organiser: "Mo",
  },
  {
    event_id: 2,
    event_name: "Golf practice at the range",
    created_at: "12-08-2024 11:00:00",
    event_organiser: "Mo",
  },
  {
    event_id: 3,
    event_name: "Rugby in the rain",
    created_at: "21-09-2024 17:00:00",
    event_organiser: "Mo",
  },
];

export default function ChatsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={testEventChats}
        keyExtractor={(item) => item.event_id}
        renderItem={({ item }) => (
          <Pressable style={styles.event} onPress={() => navigation.navigate("Messages", {
            name: item.event_name
          })}>
            <Text style={styles.text}>{item.event_name}</Text>
            <Text style={styles.text}>
              {item.created_at}
              {item.event_organiser}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  event: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 14,
    backgroundColor: "beige",
    width: 300,
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    textAlign: "center",
  },
});
