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
import index from "../../index.web";
// const API_BASE = process.env.EXPO_PUBLIC_NGROCK_URL;

const API_BASE = "http://localhost:3001";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState();
  const router = useRouter();
  useEffect(() => {
    if (searchText == "") {
      setSearchResults("");
    } else {
      GetFacilities(searchText);

      // console.log(`searchResults = ${searchResults}`);
    }
  }, [searchText]);

  const GetFacilities = async (input) => {
    const res = await axios
      .get(API_BASE + "/facility/search?query=" + input)
      .then((foundData) => {
        setSearchResults(foundData.data);
      })
      .catch((err) => console.error("Error: ", err));
  };
  const handleChangeText = (text) => {
    // if (text != "") {
    //   GetFacilities(text);
    // } else {
    //   setSearchText("");
    // }
    setSearchText(text);
  };
  const handleFacilitySelect = (facility) => {
    setSelectedFacility();
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
        {searchResults.length > 0 && (
          <FlatList
            data={searchResults}
            renderItem={({ item, index }) => (
              // <Link
              //   push
              //   href={{
              //     pathname: "/search/facility",
              //     params: {
              //       selection: "hi",
              //     },
              //   }}
              // >
              <TouchableOpacity
                onPressOut={() => {
                  router.push({
                    pathname: "/search/facility",
                    params: {
                      id: item._id,
                    },
                  });
                }}
              >
                <Text>{item.company}</Text>
                <Text>{item.address}</Text>
              </TouchableOpacity>
              // </Link>
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
