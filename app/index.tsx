import { Redirect, Tabs } from "expo-router";
import { Stack } from "expo-router/stack";
import { Drawer } from "expo-router/drawer";

export default function Index() {
  return <Redirect href="/(layout)/(tabs)/home" />;
}
