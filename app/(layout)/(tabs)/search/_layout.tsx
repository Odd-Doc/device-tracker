import { Stack, Tabs } from "expo-router";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Search Index",
        }}
      />
      <Stack.Screen
        name="facility"
        options={{
          title: "Facility",
        }}
      />
    </Stack>
  );
}
