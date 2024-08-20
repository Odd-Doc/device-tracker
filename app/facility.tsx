import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface FacilityProps {
  name: String;
  street: String;
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
const Facility = ({ name, street }: FacilityProps) => (
  <View>
    <Text>{name}</Text>
    <Text>{street}</Text>
  </View>
);

const styles = StyleSheet.create({});

export default Facility;
