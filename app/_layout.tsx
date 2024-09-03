import { Tabs } from "expo-router";
import { Stack } from "expo-router/stack";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(layout)" options={{ headerShown: false }} />
    </Stack>
  );
}
