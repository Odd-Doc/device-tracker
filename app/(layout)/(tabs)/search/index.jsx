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
const API_BASE = process.env.EXPO_PUBLIC_NGROCK_URL;

// const API_BASE = "http://localhost:3001";

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
      <SafeAreaView style={{ backgroundColor: "#555555" }}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter search value"
            value={searchText}
            onChangeText={(text) => handleChangeText(text)}
          />
          {/* check if search text is empty, if so, do not render Flatlist */}
          {searchResults.length > 0 && (
            <FlatList
              data={searchResults}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.facility}
                  onPressOut={() => {
                    router.push({
                      pathname: "/search/facilityScreen",
                      params: {
                        id: item._id,
                      },
                    });
                  }}
                >
                  <Text style={styles.facilityText}>{item.company}</Text>
                  <Text style={styles.facilityText}>{item.address}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555555",
    flex: 1,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    padding: 12,
    marginBottom: 12,
    marginTop: 12,
    backgroundColor: "white",
  },
  facility: {
    backgroundColor: "#2662d2",
    padding: 5,
    flex: 1,
    alignItems: "center",
    margin: 6,
  },
  facilityText: {
    fontSize: 15,
    color: "white",
  },
});
