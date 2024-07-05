import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const events = [
  {
    event_name: "Soccer Star Solutions",
    img_url:
      "https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954_640.jpg",
    description: "Playing football with Northcoders Colleagues",
    location: "Leeds",
    created_at: "2024-07-19 10:23:54",
    event_spaces_available: 20,
    event_category: "football",
    event_organiser: "Alex",
  },
  {
    event_name: "Bounce Ballers",
    img_url: "https://storage.googleapis.com/pod_public/1300/180358.jpg",
    description: "Playing Basketball 5 v 5",
    location: "Leeds",
    created_at: "2024-07-24 16:45:20",
    event_spaces_available: 10,
    event_category: "basketball",
    event_organiser: "DannyBoy",
  },
  {
    event_name: "Birdie Bound",
    img_url:
      "https://cdn.shopify.com/s/files/1/0576/2750/8872/files/Golf_Birdie_480x480.jpg?v=1676301047",
    description: "Playing Golf with Big Boys",
    location: "Manchester",
    created_at: "2024-07-24 15:10:30",
    event_spaces_available: 5,
    event_category: "Golf",
    event_organiser: "Mo",
  },
];

const Item = ({ event, navigation }) => (
  <Card>
    <Card.Title>{event.event_name}</Card.Title>
    <Card.Divider />
    <Card.Image style={{ padding: 0 }} source={{ uri: event.img_url }} />
    <Text style={{ marginBottom: 10 }}>{event.description}</Text>{" "}
    <Button
      icon={
        <Icon name='code' color='#ffffff' iconStyle={{ marginRight: 10 }} />
      }
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title='VIEW NOW'
      onPress={() => navigation.navigate("Single_Sport", event)}
    />
  </Card>
);

export default function SportCards({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={events}
        renderItem={({ item }) => <Item event={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
