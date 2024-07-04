import { createStackNavigator } from "@react-navigation/stack"
import ChatsScreen from "../screens/ChatsScreen"
import MessagesScreen from "../screens/MessagesScreen"

const ChatsStack = createStackNavigator()

export default function MessageStack() {
    return (
        <ChatsStack.Navigator>
            <ChatsStack.Screen name="ChatsList" component={ChatsScreen} options={{ headerShown: false }}/>
            <ChatsStack.Screen name="Messages" component={MessagesScreen}/>
        </ChatsStack.Navigator>
    )
}