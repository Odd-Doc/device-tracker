import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

interface FacilityProps {
  company: String;
  address: String;
  city?: String;
  state?: String;
  zip?: Number;
  devices: Array<string>;
}

function Facility({ address, company, devices }: FacilityProps) {
  const [name, setName] = useState<String>("");

  return (
    <>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{company}</Text>
        <Text style={styles.text}>{address}</Text>
      </View>
      <TouchableOpacity
        // style={[styles.viewDevicesButton, { transform: [{ translateY: -10 }] }]}
        style={styles.viewDevicesButton}
      >
        <Text style={styles.viewDevicesText}>View Devices</Text>
      </TouchableOpacity>
      <View style={styles.devicesContainer}>
        {devices.length > 0 && (
          <FlatList
            data={devices}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.device}></TouchableOpacity>
            )}
          />
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: "purple",
  },
  text: {
    color: "black",
  },
  devicesContainer: {
    flex: 1,
    backgroundColor: "#555555",
  },
  viewDevicesButton: {
    flex: 0.25,

    backgroundColor: "#400080",
  },
  viewDevicesText: {
    color: "white",
  },
  device: {},
  deviceText: {},
});

export default Facility;
