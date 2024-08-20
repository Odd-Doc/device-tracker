import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import Facility from "./facility";
const API_BASE = "http://localhost:3001";

const Facilities = () => {
  const [facilities, setFacilities] = useState();
  useEffect(() => {
    const abortController = new AbortController();
    GetFacilities();

    return () => {
      abortController.abort();
    };
  }, []);

  const GetFacilities = () => {
    fetch(API_BASE + "/facilities")
      .then((res) => res.json())
      .then((data) => setFacilities(data))
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <View>
      <Stack.Screen options={{ title: "Facilities Page" }} />
      <Text>Facilities Page</Text>

      <View>
        {facilities && (
          <FlatList
            data={facilities}
            renderItem={({ item }) => (
              <Facility name={item.name} street={item.street} />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
