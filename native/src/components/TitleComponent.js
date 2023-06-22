import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar, Box, HStack, IconButton, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const TitleComponent = () => {
  return (
    <>
      <StatusBar bg="black" barStyle="light-content" />
      <HStack
        style={styles.container}
        bg="#f5f5f5"
        px="1"
        py="3"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <Text style={styles.titleText}>
            Phone Book App
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default TitleComponent;
