import { Tabs } from "expo-router";
import { Stack } from "expo-router/stack";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Web Home",
          //   tabBarIcon: ({ color }) => (
          //     <FontAwesome size={28} name="home" color={color} />
          //   ),
        }}
      />
    </Stack>
  );
}
