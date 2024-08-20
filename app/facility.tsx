import { StyleSheet, Text, View } from "react-native";
import React from "react";
type FacilityProps = { name: string };
const Facility = ({ name }: FacilityProps) => {
  return <View>{name}</View>;
};

export default Facility;

const styles = StyleSheet.create({});
