import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { getEventsByUsername } from "../api";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function ChatsScreen({navigation}) {

  const {user, setUser} = useContext(UserContext)
  const [chats, setChats] = useState(undefined)
  useEffect(()=> {
    getEventsByUsername(user.username).then((Chats)=> {
      setChats(Chats)
    })
  
  }, [])


if(chats === undefined) {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.emptytext}>{"You are not in any chats"}</Text>
        </ScrollView>
      </View>
    );  } 
    
else {

  return (
    <View style={styles.container}>
      <ScrollView>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.event_id}
        renderItem={({ item }) => (
          <Pressable style={styles.event} onPress={() => navigation.navigate("Messages", {
            name: item.event_name,
            id: item.event_id
          })}>
            <Text style={styles.text}>{item.event_name}</Text>
            <Text style={styles.text}>
              {item.created_at}
              {item.event_organiser}
            </Text>
          </Pressable>
        )}
      />
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  event: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 14,
    backgroundColor: "beige",
    width: 300,
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    textAlign: "center",
  },
  emptytext: {
    flex: 1,
    fontSize: 30,
    justifyContent: "space-between",
    textAlign: "center",
  },
});
