import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
const API_BASE = "http://localhost:3001";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    GetFacilities();
    return () => {
      abortController.abort();
    };
  }, []);

  const GetFacilities = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setFacilities(data))
      .catch((err) => console.error("Error: ", err));
  };
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
