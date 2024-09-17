import {
  Link,
  router,
  Stack,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import axios from "axios";
// const API_BASE = process.env.EXPO_PUBLIC_NGROCK_URL;

const API_BASE = "http://localhost:3001";

export default function Search({ router }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [selectedFacility, setSelectedFacility] = useState();

  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
    }

    GetFacilities();
  }, [searchText]);
  const GetFacilities = () => {
    axios
      .get(API_BASE + "/facilities")
      .then((foundData) => {
        var fuse = new Fuse(foundData.data, options);
        const result = fuse.search(searchText);

        setSearchResults(result);
      })
      .catch((err) => console.error("Error: ", err));
  };
  const handleChangeText = (text) => {};
  const handleFacilitySelect = (facility) => {
    setSelectedFacility(JSON.stringify(facility));
  };
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
                push
                href={{
                  pathname: "/search/facility",
                  params: {
                    selection: JSON.stringify(item.item.company),
                  },
                }}
              >
                <TouchableOpacity onPress={() => handleFacilitySelect(item)}>
                  <Text>
                    {item.item.address}
                    {item.item.company}
                  </Text>
                </TouchableOpacity>
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
