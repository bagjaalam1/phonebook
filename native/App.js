import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import TitleComponent from "./src/components/TitleComponent";
import Add from "./src/features/Add";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <TitleComponent />
        </View>
        <View style={styles.addContainer}>
          <Add />
        </View>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addContainer: {
    alignItems: "flex-start",
    marginLeft: 20,
  },
});
