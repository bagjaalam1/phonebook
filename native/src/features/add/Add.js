import React, { useState } from "react";
import { Box, Button, Stack, Divider, FormControl, Input } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { faBan, faPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Add = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  return (
    <View style={styles.addContainer}>
      {!isAddFormVisible ? (
        <Box alignItems="center">
          <Button
            onPress={() => toggleAddForm()}
            colorScheme="blue"
            size="lg"
            style={styles.addButton}
          >
            <View style={styles.buttonContent}>
              <FontAwesomeIcon icon={faPlus} color="white" />
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </Button>
        </Box>
      ) : (
        <Box style={styles.container}>
          <Box style={styles.cardHeader}>
            <Text style={styles.textHeader}>Adding Form</Text>
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
            <Box px={4} style={styles.buttonContainer} >
            <Button
                onPress={toggleAddForm}
                size="lg"
                style={styles.saveButton}
              >
                <View style={styles.buttonContent}>
                  <FontAwesomeIcon icon={faCircleCheck} color="white" size={16} />
                  <Text style={styles.buttonText}>Save</Text>
                </View>
              </Button>
              <Button
                onPress={toggleAddForm}
                size="lg"
                style={styles.cancelButton}
              >
                <View style={styles.buttonContent}>
                  <FontAwesomeIcon icon={faBan} color="white" size={16} />
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignItems: "center",
    backgroundColor: "#2387a0",
    marginTop: 20,
  },
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
    height: 230,
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
  cancelButton: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 6,
    marginHorizontal: 4
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 6,
    marginHorizontal: 4
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
  },
  labelText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  addContainer: {
    alignItems: "flex-start",
    marginLeft: 20,
  },
});

export default Add;
