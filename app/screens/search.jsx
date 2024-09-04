import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import Fuse from "fuse.js";
import list from "../list.json";
import { useState } from "react";
const API_BASE = "http://localhost:3001";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const params = useLocalSearchParams();
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["street"],
  };
  const GetFacilities = () => {
    fetch(API_BASE + "/facilities/search")
      .then((res) => res.json())
      .then((foundData) => {
        const fuse = new Fuse(foundData, options);
        const result = fuse.search(searchText);
        console.log(result);
        setSearchResults(result);
      })
      .catch((err) => console.error("Error: ", err));

    // .then((data) => setSearchResults(data))
  };
  const handleChangeText = (text) => {
    setSearchText(text);
    if (text != "") {
      // setSearchResults(result);
      GetFacilities();
    } else {
      setSearchResults([]);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={(text) => handleChangeText(text)}
      />
      {searchResults && (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <Text>{item.item.street}</Text>}
        />
      )}
    </SafeAreaView>
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
