import { View, ScrollView, Text, FlatList } from "react-native";
import React from "react";

const testMessages = [
  {
    message_id: 1,
    message_body: "Hi, I would like to join this event",
    sender: "DannyBoy",
    event_id: 1,
  },
  {
    message_id: 2,
    message_body: "Welcome to the world of Social Meets Up!",
    sender: "Mo",
    event_id: 1,
  },
  {
    message_id: 3,
    message_body: "Hey the weather is looking nice!",
    sender: "Alex",
    event_id: 1,
  },
];

export default function MessagesScreen({ route, navigation }) {
  const { name } = route.params;
  const [messages, setMessages] = React.useState([])
  React.useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    setMessages(testMessages)
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.message_id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.message_body}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}
