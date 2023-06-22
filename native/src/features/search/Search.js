import React, { useState } from "react";
import { Box, Stack, FormControl, Input } from "native-base";
import { Text, StyleSheet } from "react-native";

const search = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.cardHeader}>
        <Text style={styles.textHeader}>Search Form</Text>
      </Box>
      <Box style={styles.cardBody}>
        <Stack px={4}>
          <FormControl style={styles.formContainer}>
            <FormControl.Label>
              <Text style={styles.labelText}>Name</Text>
            </FormControl.Label>
            <Input fontSize={15} />
          </FormControl>
          <FormControl style={styles.formContainer}>
            <FormControl.Label>
              <Text style={styles.labelText}>Phone</Text>
            </FormControl.Label>
            <Input fontSize={15} />
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: 350,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: "lightgrey",
    shadowColor: "black",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 20
  },
  cardHeader: {
    width: 350,
    height: 50,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    borderBottomWidth: 0.5,
    borderColor: "lightgrey",
  },
  textHeader: {
    textAlign: "left",
    paddingLeft: 10,
    fontSize: 17,
  },
  cardBody: {
    width: 350,
    height: 180,
    backgroundColor: "white",
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    borderBottomColor: "lightgrey",
  },
  TextBody: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  formContainer: {
    marginTop: 10,
  },
  labelText: {
    fontWeight: "bold",
  },
});

export default search;
