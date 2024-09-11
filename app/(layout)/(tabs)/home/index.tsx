import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Stack, useRouter } from "expo-router";

const HomeIndex = () => {
  const router = useRouter();
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
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={() => router.push("/home/map")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Map</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.linkContainer}>
            <Link href="/map" style={styles.linkContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Something Else</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View style={styles.linkContainer}>
            <Link href="/map" style={styles.linkContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Other Stuff</Text>
              </TouchableOpacity>
            </Link>
          </View> */}
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
