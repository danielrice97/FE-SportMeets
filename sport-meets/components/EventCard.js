import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <Text style={styles.eventDate}>{event.date}</Text>
        <Text style={styles.eventLocation}>{event.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  details: {
    padding: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    marginTop: 5,
    color: '#555',
  },
  eventDate: {
    marginTop: 5,
    color: '#888',
  },
  eventLocation: {
    marginTop: 5,
    color: '#888',
  },
});
