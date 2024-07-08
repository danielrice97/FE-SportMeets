import {
  View,
  FlatList,
} from "react-native";
import {useState, useEffect} from "react";
import GroupChatCard from "../components/GroupChatCard";
import { getUserEvents } from "../api";

export default function ChatsScreen({navigation}) {
  const userContext = "Mo"
  const [joinedEvents, setJoinedEvents] = useState([]);
  useEffect(() => {
    getUserEvents(userContext).then((events) => {
      setJoinedEvents(events)
    })
  }, [])
  return (
    <View>
      <FlatList
        data={joinedEvents}
        keyExtractor={(item) => item.event_id}
        renderItem={({ item }) => <GroupChatCard item={item} navigation={navigation} />}
      />
    </View>
  );
}