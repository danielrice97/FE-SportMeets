import { View, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import IndividualMessage from "../components/IndividualMessage";
import SendMessage from "../components/SendMessage";
import { getEventMessages } from "../api";
import { UserContext } from "../UserContext";
import { useContext, useCallback } from "react";
import { socket } from "../components/socket";

export default function MessagesScreen({ route, navigation }) {
  const { user } = useContext(UserContext);
  const { name, id } = route.params;

  function emitMessage(newMessage) {
    socket.emit("chat-message", newMessage, id);
  }

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    getEventMessages(id).then((messages) => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    socket.connect();

    //When viewing messages
    socket.emit("join-room", id);

    socket.on("receive-message", (message) => {
      console.log("Server sent the following message: ", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function handleSend(newMessage) {
    const newMessageObject = {
      message_id: messages.length + 1,
      message_body: newMessage,
      sender: user.username,
      event_id: id,
      created_at: new Date().toLocaleString(),
    };
    emitMessage(newMessageObject);
    setMessages((prevMessages) => [...prevMessages, newMessageObject]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.message_id}
        renderItem={({ item }) => <IndividualMessage item={item} />}
      ></FlatList>
      <SendMessage handleSend={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});