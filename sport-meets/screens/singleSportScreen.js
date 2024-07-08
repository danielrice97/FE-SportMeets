import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Button } from "@rneui/themed";
import { useState } from "react";
import ChatsScreen from "./ChatsScreen";
import { updateSpacesAvailable } from "../api";

export default function SingleSportScreen({ navigation, route }) {
  const { event } = route.params;
  console.log(event)
  const [spacesAvailable, setSpacesAvailable] = useState(
    event.event_spaces_available
  );
  const [isLoading, setIsLoading] = useState(false)
  const users = [
    {
      username: "Mo",
      name: "Muhammad",
      password: "iPhone",
      avatar_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHWhVCrVug5Maodgb_dcJKvfpSjAG60Ooew&s",
    },
    {
      username: "DannyBoy",
      name: "Dan",
      password: "Vaping",
      avatar_url:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2023/06/22155410/top-eight-crypto-scams-2023-featured.jpg",
    },
    {
      username: "Alex",
      name: "Alexandra",
      password: "teacher",
      avatar_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHWhVCrVug5Maodgb_dcJKvfpSjAG60Ooew&s",
    },
  ];
  const organiser = users.find(
    (user) => user.username === event.event_organiser
  );
  if(isLoading) return <Text>We are adding you the event...</Text>
  
  return (
    <ScrollView>
      <View>
        <Card style={styles.container}>
          <Card.Title>
            <Text style={styles.fonts} h2>
              {event.event_name}
            </Text>
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{ uri: event.event_img_url }}
          />
          <Text style={styles.text}>
             <Text style={styles.bold}>Event Location: </Text>
             {event.event_location}
             </Text>


             
          <Text style={styles.text}>
          <Text style={styles.bold}>
            Sport:</Text>
            {event.event_category.slice(0, 1).toUpperCase() +
              event.event_category.slice(1)}
          </Text>

          <Text style={styles.text}>
          <Text style={styles.bold}>
          Description: </Text>
          {event.event_description}
          </Text>

          <View style={styles.avatarHostContain}>
            <Card.Image
              source={{ uri: organiser.avatar_url }}
              style={styles.avatar}
            />
            <Text style={styles.text}>
            <Text style={styles.bold}>
            Host:
            </Text>
            {event.event_organiser}
            </Text>
          </View>
          <Text style={styles.text}>
          <Text style={styles.bold}>
          Spaces Available: 
          </Text>
           {spacesAvailable}</Text>

          <Text style={styles.text}>
          <Text style={styles.bold}>Event Date:</Text>
           {event.created_at}
           </Text>
          <Button
            title={`Join ${event.event_name}`}
            onPress={() => {
             
              setIsLoading(true)
               updateSpacesAvailable(event)
               .then((data)=>{
                setIsLoading(false)
                setSpacesAvailable((current) => {
                  return current - 1;
                });
                navigation.navigate("Messages", {
                  name: event.event_name,
                  id: event.event_id
                 })
                return data
               })
               .catch((err)=>{
           
               })
            }}
          />
        </Card>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
    marginTop: 9,
    fontSize: 25,
    fontWeight: 'bold',
  },
  user: {
    flexDirection: "row",
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
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  avatarHostContain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  }
});
