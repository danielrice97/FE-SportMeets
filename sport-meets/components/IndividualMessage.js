import { Text, View, StyleSheet } from "react-native";

export default function IndividualMessage({ item }) {
  const userContext = "Mo"; // This needs to be upadted once we implement user context upon login
  const isUserMessage = userContext === item.sender;
  return (
    <View
      style={[
        isUserMessage ? styles.senderBubble : styles.receiverBubble,
        styles.messageContainer,
      ]}
    >
      <Text style={[styles.userName, isUserMessage && styles.senderText]}>{item.sender}</Text>
      <Text style={[styles.messageBody, isUserMessage && styles.senderText]}>{item.message_body}</Text>
      <Text style={[styles.timestamp, isUserMessage? styles.senderTimestamp : styles.receiverTimestamp]}>{item.created_at}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "80%",
    padding: 8,
    borderRadius: 12,
    marginVertical: 4,
    marginHorizontal: 10,
    elevation: 2,
  },
  senderBubble: {
    backgroundColor: "#007aff",
    alignSelf: "flex-end",
    borderBottomRightRadius: 3
  },
  receiverBubble: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 3
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  senderText: {
    color: "#eee"
  },
  messageBody: {
    marginBottom: 3,
    lineHeight: 16
  },
  timestamp: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
  senderTimestamp: {
    color: "#ddd",
  },
  receiverTimestamp: {
    color: "#777",
  },
});
