import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateEventScreen() {
  const [sportType, setSportType] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleCreateEvent = () => {
    console.log('Event Created:', {
      sportType,
      eventName,
      eventImage,
      eventDescription,
      eventDate,
      eventLocation
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type of Sport:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Football"
        value={sportType}
        onChangeText={setSportType}
      />
      <Text style={styles.label}>Event Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Sunday Casual Football"
        value={eventName}
        onChangeText={setEventName}
      />
      <Text style={styles.label}>Event Image URL:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., http://example.com/image.png"
        value={eventImage}
        onChangeText={setEventImage}
      />
      <Text style={styles.label}>Event Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Open to all abilities and ages"
        value={eventDescription}
        onChangeText={setEventDescription}
      />
      <Text style={styles.label}>Event Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 2024-07-15"
        value={eventDate}
        onChangeText={setEventDate}
      />
      <Text style={styles.label}>Event Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Northcoders Leeds Office"
        value={eventLocation}
        onChangeText={setEventLocation}
      />
      <Button title="Create Event" onPress={handleCreateEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
});
