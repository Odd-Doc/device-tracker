import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { RouteParams, Router, Stack, useLocalSearchParams } from "expo-router";
import axios from "axios";
const API_BASE = "http://localhost:3001";

// interface FacilityProps {
//   facilityName: String;
//   facilityStreet: String;
//   city?: String;
//   state?: String;
//   zip?: Number;
// }

function Facility() {
  const [companyName, setCompanyName] = useState();
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyZip, setCompanyZip] = useState("");
  const [companyTestDue, setCompanyTestDue] = useState("");
  const [companyDevices, setCompanyDevices] = useState([]);

  // const [companyCity, setCompanyCity] = useState();
  // const [companyState, setCompanyState] = useState();
  const companyCity = "Grand Prairie";
  const companyState = "Texas";

  const params = useLocalSearchParams();
  const { id } = params;
  const abortControllerRef = useRef();

  useEffect(() => {
    fetchFacility();
  }, []);
  const fetchFacility = async () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();
    try {
      const facility = await axios
        .get(API_BASE + "/facility/" + id, {
          signal: abortControllerRef.current?.signal,
        })
        .then((res) => {
          setCompanyName(res.data.company);
          setCompanyAddress(res.data.address);
          setCompanyZip(res.data.zip);
          setCompanyTestDue(
            new Date(
              new Date(res.data.testdue).getTime() +
                new Date(res.data.testdue).getTimezoneOffset() * 60000
            ).toLocaleDateString()
          );
          setCompanyDevices(res.data.devices);
        });

      // console.log(facility.data);
    } catch {
      (e) => console.error(e);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Facility" }} />
      <View>
        <Text>{companyName}</Text>
        <Text>{companyAddress}</Text>
        <Text>{companyCity}</Text>
        <Text>{companyState}</Text>
        <Text>{companyZip}</Text>
        <Text>{companyTestDue}</Text>
        <Text>{companyDevices.length}</Text>
        {companyDevices.map((e, i) => {
          console.log(e.serialNumber);
        })}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bg: {},
});

export default Facility;
