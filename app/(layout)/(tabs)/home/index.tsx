import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../../../screens/search";
import { Stack } from "expo-router";
import * as Location from "expo-location";
import Map from "../../../components/map";

const HomeIndex = () => {
  const [location, setLocation] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleFindMe = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
    // console.log(location);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Shmokay",
        }}
      />

      <View style={styles.container}>
        <Map loc={location} />
        <Button title="Find Me" onPress={() => handleFindMe()} />
      </View>
    </>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
