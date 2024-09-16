import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import Fuse from "fuse.js";
import { useState } from "react";
import axios from "axios";
// const API_BASE = process.env.EXPO_PUBLIC_NGROCK_URL;

const API_BASE = "http://localhost:3001";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const options = {
    threshhold: 0.3,
    // Search in `author` and in `tags` array
    keys: ["street", "name"],
  };
  const GetFacilities = () => {
    axios
      .get(API_BASE + "/facilities/search")
      .then((foundData) => {
        var fuse = new Fuse(foundData.data, options);
        const result = fuse.search(searchText);
        setSearchResults(result);
      })
      .catch((err) => console.error("Error: ", err));
  };
  const handleChangeText = (text) => {
    setSearchText(text);
    GetFacilities();
  };
  const handleFacilitySelect = () => {};
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Search" }} />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={(text) => handleChangeText(text)}
        />
        {/* check if search text is empty, if so, do not render Flatlist */}
        {searchResults && searchText != "" && (
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <Link
                href={{
                  pathname: "/search/facility",
                  params: {
                    name: item.item.name,
                    street: item.item.street,
                    devices: item.item.devices,
                  },
                }}
                onPressOut={handleFacilitySelect}
              >
                <Text>
                  {item.item.street}
                  {item.item.name}
                </Text>
              </Link>
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
