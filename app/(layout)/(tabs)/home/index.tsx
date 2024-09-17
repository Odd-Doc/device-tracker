import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import convertTokayData from "../../../services/convertTokayData";
import { Stack, useRouter } from "expo-router";
import rawData from "../../../services/data.json";
const HomeIndex = () => {
  const router = useRouter();

  const handleImport = () => {
    // convertTokayData(rawData);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Shmokay",
        }}
      />

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => router.push("/(stack)/loadingScreen")}
          style={styles.importButton}
        >
          <Text style={styles.importButtonText}>Import Data</Text>
        </TouchableOpacity>
        <ScrollView>
          {/* <MapIndex /> */}
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => router.push("/home/map")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Map</Text>
            </TouchableOpacity>
          </View>
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
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 10,
    width: 200,
  },
  importButton: {
    backgroundColor: "#ff9306",
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    width: 100,
  },
  importButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  linkContainer: {
    marginTop: 20,
    alignSelf: "center",
  },
});
