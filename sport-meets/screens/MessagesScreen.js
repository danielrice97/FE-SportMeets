import { View, FlatList, StyleSheet } from "react-native";
import {useState, useEffect} from "react";
import IndividualMessage from "../components/IndividualMessage";
import SendMessage from "../components/SendMessage";
import { getEventMessages } from "../api";
import { UserContext } from '../UserContext';
import { useContext } from 'react';

export default function MessagesScreen({ route, navigation }) {
  const {user} = useContext(UserContext)
  const { name, id } = route.params;

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    getEventMessages(id).then((messages) => {
      setMessages(messages)
    })
  }, []);

  function handleSend(newMessage) {
    const newMessageObject = {
      message_id: messages.length + 1,
      message_body: newMessage,
      sender: user.username,
      event_id: id,
      created_at: new Date().toLocaleString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessageObject]);
  }

  //do a use effect

  //(as a use effect) send socket msg to join room event handler passing the event id as room name

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.message_id}
        renderItem={({ item }) => <IndividualMessage item={item} />}></FlatList>
      <SendMessage handleSend={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
