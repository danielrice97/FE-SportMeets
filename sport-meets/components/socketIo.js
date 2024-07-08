import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  View,
} from "react-native";
import io from "socket.io-client";

const SOCKET_URL = "http://localhost:5550"; // Replace with your server's IP and port

export default function SocketComponent() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socketClient = io(SOCKET_URL, {
      transports: ["websocket"], // you need to explicitly specify this in React Native
    });

    socketClient.on("connect", () => {
      console.log("connected to the server");
      //
    });

    socketClient.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    setSocket(socketClient);

    return () => {
      socketClient.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.send(message);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {" "}
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder='Type a message...'
        />{" "}
        <Button title='Send' onPress={sendMessage} />{" "}
      </View>{" "}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
  },
});
