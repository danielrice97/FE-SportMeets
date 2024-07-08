import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { useState } from 'react';


export default function SingleSportScreen({ navigation, route,  }) {
  const [spacesAvailable, setSpacesAvailable] = useState(event.event_spaces_available)
  const {event} = route.params
  const users = [{
    username: "Mo",
    name: "Muhammad",
    password: "iPhone",
    avatar_url:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHWhVCrVug5Maodgb_dcJKvfpSjAG60Ooew&s" 
},
{
    username: "DannyBoy",
    name: "Dan",
    password: "Vaping",
    avatar_url:  "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2023/06/22155410/top-eight-crypto-scams-2023-featured.jpg" 
},
{
    username: "Alex",
    name: "Alexandra",
    password: "teacher",
    avatar_url:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHWhVCrVug5Maodgb_dcJKvfpSjAG60Ooew&s" 
}]
const organiser = users.find(user => user.username === event.event_organiser);
console.log(organiser)
  return (<ScrollView >
  <View >
    <Card style={styles.container}>
    <Card.Title><Text style={styles.fonts} h2>{event.event_name}</Text></Card.Title>
    <Card.Divider />
    <Card.Image style={{ padding: 0 }} source={{ uri: event.img_url }} />
    <Text style={styles.fonts} >Location: {event.location}</Text>
    <Text style={styles.fonts} >Sport: {event.event_category.slice(0,1).toUpperCase() + event.event_category.slice(1)}</Text>
    <Text style={styles.fonts} >Description: {event.description}</Text>
    <View style={styles.avatarHostContain}>
    <Card.Image source={{ uri: organiser.avatar_url }} style={styles.avatar} />
    <Text style={styles.fonts} >
      Host:{event.event_organiser}</Text>
    </View>
    <Text style={styles.fonts} >Spaces Available: {spacesAvailable}</Text>
    <Text style={styles.fonts} >Event Date: {event.created_at}</Text>
    <Button title={`Join ${event.event_name}`} onPress={()=>{
      setSpacesAvailable((current)=>{
        return current - 1
      })
    }} 
    />
    </Card>
  </View>
  </ScrollView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
    marginTop: 9,
    fontSize: 25,
    fontFamily: "Sans Serif"
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  avatar:{
    borderRadius: 30,
    width: 60,
    height: 60
  },
  avatarHostContain: {
   flex: 1,
   flexDirection: 'row',
   alignItems: "center"
  }

  
  });