import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export default function GroupChatCard({ item, navigation }) {
  return (
    <Pressable
      style={styles.event}
      onPress={() =>
        navigation.navigate("Messages", {
          name: item.event_name,
          id: item.event_id,
        })
      }
    >
      <Image
        alt="Image of the event chat"
        source={{ uri: item.event_img_url }}
        style={styles.eventImage}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.eventName}>{item.event_name}</Text>
          <Text style={styles.eventOrganiser}>{item.event_organiser}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.eventLocation}>{item.event_location}</Text>
          <Text style={styles.eventDate}>{item.created_at}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  event: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventOrganiser: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#777",
  },
  eventLocation: {
    fontSize: 14,
    color: "#555",
  },
  eventDate: {
    fontSize: 12,
    color: "#777",
  },
});
