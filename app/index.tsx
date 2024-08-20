import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />

      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button}>
          <Link style={styles.pressableLink} href="/about">
            About
          </Link>
        </Pressable>
        <Pressable style={styles.button}>
          <Link style={styles.pressableLink} href="/facilities">
            View facilities
          </Link>
        </Pressable>
        <Pressable style={styles.button}>
          <Link style={styles.pressableLink} href={"/details"}>
            View Details
          </Link>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#b852fd",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  pressableLink: {
    color: "#ffff",
  },
});
