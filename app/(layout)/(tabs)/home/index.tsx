import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "../../../screens/search";
import { Stack } from "expo-router";
const HomeIndex = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Shmokay",
        }}
      />

      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({});
