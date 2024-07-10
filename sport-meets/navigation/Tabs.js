import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChatsScreen from "../screens/ChatsScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import AccountScreen from "../screens/AccountScreen";
import { StyleSheet } from "react-native";
import SingleSportScreen from "../screens/singleSportScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserProfileScreen from "../screens/UserProfileScreen";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { user } = useContext(UserContext);
  if (!user.username) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Chats":
                iconName = "android-messages";
                break;
              case "Create":
                iconName = "calendar-plus";
                break;
              case "Account":
                iconName = "account";
                break;
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarStyle: styles.tab_bar,
        })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Chats' component={ChatsScreen} />
        <Tab.Screen name='Create' component={CreateEventScreen} />
        <Tab.Screen name='Account' component={AccountScreen} />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Chats":
                iconName = "android-messages";
                break;
              case "Create":
                iconName = "calendar-plus";
                break;
              case "Account":
                iconName = "account";
                break;
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarStyle: styles.tab_bar,
        })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Chats' component={ChatsScreen} />
        <Tab.Screen name='Create' component={CreateEventScreen} />
        <Tab.Screen name='Account' component={UserProfileScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  tab_bar: {
    margin: 10,
    borderRadius: 20,
    height: 60,
  },
});
