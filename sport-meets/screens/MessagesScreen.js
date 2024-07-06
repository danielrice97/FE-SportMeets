import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import IndividualMessage from "../components/IndividualMessage";

const testMessages = [
  {
    message_id: 1,
    message_body: "Hi, I would like to join this event",
    sender: "DannyBoy",
    event_id: 1,
    created_at: "2024-07-12 17:00:00",
  },
  {
    message_id: 2,
    message_body: "Welcome to the world of Social Meets Up!",
    sender: "Mo",
    event_id: 1,
    created_at: "2024-07-12 17:02:00",
  },
  {
    message_id: 3,
    message_body: "Hey the weather is looking nice!",
    sender: "Alex",
    event_id: 1,
    created_at: "2024-07-12 17:05:00",
  },
];

export default function MessagesScreen({ route, navigation }) {
  const { name } = route.params;
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    setMessages(messages);
  }, []);

  return (
    <View>
      <FlatList
        data={testMessages}
        keyExtractor={(item) => item.message_id}
        renderItem={({ item }) => <IndividualMessage item={item} />}
      />
    </View>
  );
}