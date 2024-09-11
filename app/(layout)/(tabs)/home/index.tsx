import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
        <ScrollView>
          {/* <MapIndex /> */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Map</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555555",
  },
  button: {
    backgroundColor: "#137bf2",
    alignSelf: "center",
    width: "50%",
    borderRadius: 12,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
