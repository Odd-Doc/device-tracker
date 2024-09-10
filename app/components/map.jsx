import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function Map({ loc }) {
  const [location, setLocation] = useState({
    latitude: 32.7544,
    longitude: -97.01,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // setLocation(loc);
    // console.log(loc);
  }, []);
  return (
    <View style={styles.container}>
      <MapView region={location} style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
