import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import Facility from "./facility";
const API_BASE = "http://localhost:3001";

const Facilities = () => {
  const [facilities, setFacilities] = useState();

  //-------------------------------------------------------------------------------------
  // Gets ALL facilities -> this is doesnt serve any real purpose beyond testing my connection to database.
  //-------------------------------------------------------------------------------------
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   GetFacilities();

  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);

  // const GetFacilities = () => {
  //   fetch(API_BASE + "/facilities")
  //     .then((res) => res.json())
  //     .then((data) => setFacilities(data))
  //     .catch((err) => console.error("Error: ", err));
  // };
  //-------------------------------------------------------------------------------------
  // render and hydrate flat list with ALL facilities
  //-------------------------------------------------------------------------------------
  // <View>
  //   {facilities && (
  //     <FlatList
  //       data={facilities}
  //       renderItem={({ item }) => (
  //         <Facility name={item.name} street={item.street} />
  //       )}
  //     />
  //   )}
  // </View>;
  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------

  return (
    <View>
      <Stack.Screen options={{ title: "Facilities Page" }} />
      <Text>Facilities Page</Text>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
