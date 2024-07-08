import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import EventCard from '../components/EventCard'; 
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import { getEventByOrganiser } from '../api';
export default function UserProfileScreen() {
  
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const [events, setEvents] = useState([])

  const {somethingChanged} = useContext(UserContext)

  useEffect(()=> {
    getEventByOrganiser(user.username).then((data)=> {
      setEvents(data)
    })
  }, [somethingChanged])

  const handleLogout = () => {
    setUser(undefined)
    navigation.navigate("Account")
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>
      <Text style={styles.eventsTitle}>Your Events</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.event_id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.eventsList}
      />
      <Button title="Log out" onPress={handleLogout}/>
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
