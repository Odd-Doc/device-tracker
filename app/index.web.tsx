import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import Devices from "./Devices";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/facility/Facilities">View facilities</Link>
    </SafeAreaView>
  );
}
