import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>Web index</Text>
      <Link href="settings">Go to Settings</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
