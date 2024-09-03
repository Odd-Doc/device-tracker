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

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const params = useLocalSearchParams();
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["author.lastName"],
  };
  const handleChangeText = (text) => {
    setSearchText(text);
    if (text != "") {
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
  };

  const fuse = new Fuse(list, options);
  const result = fuse.search(searchText);

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
          renderItem={({ item }) => <Text>{item.item.author.lastName}</Text>}
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
