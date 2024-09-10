import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteParams, Router } from "expo-router";
interface FacilityProps {
  facilityName: String;
  facilityStreet: String;
  city?: String;
  state?: String;
  zip?: Number;
}
// const FacilityProps = {
//   name: String,
//   street: String,
//   city: String,
//   state: String,
//   zip: Number,
// };

function Facility({ facilityName, facilityStreet }: FacilityProps) {
  const [name, setName] = useState<String>("");
  useEffect(() => {
    setName(facilityName);
  });
  return (
    <View>
      <Text style={styles.bg}>{name}</Text>
      {/* <Text>{facilityStreet}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "red",
  },
});

export default Facility;
