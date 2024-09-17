import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteParams, Router, Stack, useLocalSearchParams } from "expo-router";
// interface FacilityProps {
//   facilityName: String;
//   facilityStreet: String;
//   city?: String;
//   state?: String;
//   zip?: Number;
// }

function Facility() {
  const [companyName, setCompanyName] = useState();
  const params = useLocalSearchParams();
  const { selection } = params;
  console.log(selection);
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Facility" }} />
      <View>
        {/* {[...devices].map((element) => {
          console.log(element);
        })} */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bg: {},
});

export default Facility;
