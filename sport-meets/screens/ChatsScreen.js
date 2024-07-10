import {
  View,
  FlatList,
  StyleSheet,
  Text
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { getEventsByUsername } from "../api";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import GroupChatCard from "../components/GroupChatCard.js"
import { useFocusEffect } from "@react-navigation/native";

export default function ChatsScreen({navigation}) {

  const {user, setUser, somethingChanged, setSomethingChanged} = useContext(UserContext)
  const [chats, setChats] = useState(undefined)

  useFocusEffect(

    useCallback(()=> {
      if(user.username) {
        getEventsByUsername(user.username).then((Chats)=> {
          setChats(Chats)
      })} 
    }, [user])

  )
  
       
  

if(chats === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptytext}>{"You are not in any chats"}</Text>
      </View>
    );  } 
    
else {

  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.event_id}
        renderItem={({ item }) => <GroupChatCard item={item} navigation={navigation} />}
      />
    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  emptytext: {
    flex: 1,
    fontSize: 30,
    justifyContent: "space-between",
    textAlign: "center",
  },
});
