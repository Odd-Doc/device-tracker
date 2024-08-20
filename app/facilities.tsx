import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import Facility from "./facility";
const API_BASE = "http://localhost:3001";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

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
    fetch(API_BASE + "/facilities");
    // .then((res) => res.json())
    // .then((data) => setFacilities(data))
    // .catch((err) => console.error("Error: ", err));
  };
  return (
    <View>
      <Stack.Screen options={{ title: "FF" }} />
      <Text>Facilities Page</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
        <Link href="/facility">View Facility</Link>
      </View>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
