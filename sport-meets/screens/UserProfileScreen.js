import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard'; 

export default function UserProfileScreen() {
  
  const user = {
    name: 'RISHI',
    username: 'LordSunak',
    avatar: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1447370162.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
  };

  
  const events = [
    {
      id: '1',
      name: 'Footy match',
      image: 'https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Join us for a fun football match.',
      date: '2024-07-15',
      location: 'Northcoders',
    },
    {
      id: '2',
      name: 'Basketball Tournament',
      image: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Compete in our basketball Tournament.',
      date: '2024-08-20',
      location: 'City Arena, leeds',
    },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>
      <Text style={styles.eventsTitle}>Your Events</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.eventsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    color: '#888',
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventsList: {
    paddingBottom: 20,
  },
});
