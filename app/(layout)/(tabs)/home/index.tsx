import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../../../screens/search";
import { Stack } from "expo-router";
import MapIndex from "./map";

const HomeIndex = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Shmokay",
        }}
      />

      <View style={styles.container}>
        <MapIndex />
      </View>
    </>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
