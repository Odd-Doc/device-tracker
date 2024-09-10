import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../../../screens/search";
import { Stack } from "expo-router";
import * as Location from "expo-location";
import Map from "../../../components/map";

const HomeIndex = () => {
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // handleFindMe();
  }, [location]);

  const handleFindMe = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let text = "Waiting..";
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        // text = JSON.stringify(location);
        console.log(location);
        setLocation(location);
      }
    })();
  };
  // console.log(text);
  return (
    <>
      <Stack.Screen
        options={{
          title: "Shmokay",
        }}
      />

      <View style={styles.container}>
        <Map loc={JSON.stringify(location)} />
        <Button title="Find Me" onPress={handleFindMe} />
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
