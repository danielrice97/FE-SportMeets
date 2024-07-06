import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import IndividualMessage from "../components/IndividualMessage";
import SendMessage from "../components/SendMessage";

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

const formattedMessages = testMessages.map((message) => {
  return {
    ...message,
    created_at: new Date(message.created_at).toLocaleString(),
  };
});

export default function MessagesScreen({ route, navigation }) {
  const userContext = "Mo"; // This needs to be updated once we implement user context upon login
  const { name, id } = route.params; // id will be needed grabbing correct messages from DB
  const [messages, setMessages] = React.useState(formattedMessages);
  React.useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  function handleSend(newMessage) {
    const newMessageObject = {
      message_id: messages.length + 1,
      message_body: newMessage,
      sender: userContext,
      event_id: id,
      created_at: new Date().toLocaleString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessageObject]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.message_id}
        renderItem={({ item }) => <IndividualMessage item={item} />}
      >
      </FlatList>
        <SendMessage handleSend={handleSend} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});