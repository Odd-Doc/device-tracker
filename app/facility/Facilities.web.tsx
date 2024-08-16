import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Facilities = () => {
  return (
    <View>
      <Text>Facilities Page</Text>
      <Link href="/facility/Facility">View Facility</Link>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
