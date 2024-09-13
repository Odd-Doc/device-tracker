import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteParams, Router, Stack, useLocalSearchParams } from "expo-router";
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
  const [companyName, setCompanyName] = useState<string>("");
  const params = useLocalSearchParams();
  const { name, street, devices } = params;
  // console.log(devices);
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Facility" }} />
      <View>
        <Text>{name}</Text>
        <Text>{street}</Text>
        <Text>{devices}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bg: {},
});

export default Facility;
