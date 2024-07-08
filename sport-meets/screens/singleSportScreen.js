import { useState } from "react";
import { View, Text, Image, Button } from "react-native";

export default function SingleSportScreen({ navigation, route }) {
  const { event } = route.params;

  const [spacesAvailable, setSpacesAvailable] = useState(
    event.event_spaces_available
  );

  return (
    <View>
      <Text>{event.event_name}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: event.event_img_url }}
      />
      <Text>{event.event_location}</Text>
      <Text>{event.event_category}</Text>
      <Text>{event.description}</Text>
      <Text>{event.event_organiser}</Text>
      <Text>{spacesAvailable}</Text>
      <Text>{event.created_at}</Text>
      <Button
        title={`Join ${event.event_name}`}
        onPress={() => {
          setSpacesAvailable((current) => {
            return current - 1;
          });
        }}
      />
    </View>
  );
}
