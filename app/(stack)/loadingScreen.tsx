import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../screens/loading";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading size={100} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
