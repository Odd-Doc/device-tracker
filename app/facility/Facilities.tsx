import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Facilities = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "FF" }} />
      <Text>Facilities Page</Text>
      <Link href="/facility/Facility">View Facility</Link>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
