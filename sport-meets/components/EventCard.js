import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { deleteEvent } from "../api";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function EventCard({ event }) {
  const { somethingChanged } = useContext(UserContext);
  const { setSomethingChanged } = useContext(UserContext);

  const handleDelete = () => {
    const event_id = event.event_id;
    deleteEvent(event_id).then(() => {
      alert("Deleted Event");
      setSomethingChanged(!somethingChanged);
    });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: event.event_img_url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.eventName}>{event.event_name}</Text>
        <Text style={styles.eventDescription}>{event.event_description}</Text>
        <Text style={styles.eventDate}>{event.created_at}</Text>
        <Text style={styles.eventLocation}>{event.event_location}</Text>
        <Button
          onPress={handleDelete}
          title={"Delete"}
          style={styles.deleteButton}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
  },
  deleteButton: {
    width: "50%",
    height: "20%",
    color: "#555",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    padding: 10,
  },
  eventName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  eventDescription: {
    marginTop: 5,
    color: "#555",
    fontSize: 18,
    fontWeight: 600,
  },
  eventDate: {
    marginTop: 5,
    color: "#555",
    fontSize: 18,
    fontWeight: 600,
  },
  eventLocation: {
    marginTop: 5,
    color: "#555",
    fontSize: 18,
    fontWeight: 600,
  },
});
