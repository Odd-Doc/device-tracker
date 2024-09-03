import { Tabs } from "expo-router";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="home" size={32} color="#2d82e9" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="search" size={32} color="#2d82e9" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
