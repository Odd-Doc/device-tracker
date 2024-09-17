import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../screens/loadingScreen";

const LoadingScreen = () => {
  const [loadComplete, setLoadComplete] = useState<boolean>();
  useEffect(() => {
    setLoadComplete(false);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading isComplete={false} size={100} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
