import { Redirect, Tabs } from "expo-router";
import { Stack } from "expo-router/stack";
import { Drawer } from "expo-router/drawer";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return <Redirect href="/(layout)/(tabs)/home" />;
}
