import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SendMessage({ handleSend }) {
  const [message, setMessage] = useState("");

  function handlePress() {
    if (message.trim() === "") {
      return;
    }
    handleSend(message);
    setMessage("");
  }

  return (
    <KeyboardAvoidingView behaviour={"height"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          multiline
          numberOfLines={2}
        />
        <Pressable>
          <MaterialCommunityIcons name="send" style={styles.sendButton} onPress={handlePress}/>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    paddingLeft: 12,
    paddingRight: 12,
    padding: 8,
    borderRadius: 12,
    fontSize: 24,
    backgroundColor: "#007aff",
    color: "white"
  },
});
