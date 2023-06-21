import React, { useState } from "react";
import { Box, Button, Stack, Divider, FormControl, Input } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { faBan, faPlus } from "@fortawesome/free-solid-svg-icons";

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
    <View>
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
            <Stack space={4} px={4} safeArea mt={6}>
              <Text bold underline>
                Default:
              </Text>
              <FormControl>
                <FormControl.Label>Favorite framework</FormControl.Label>
                <Input />
                <FormControl.HelperText>
                  We'll keep this between us.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>
                  Something is wrong.
                </FormControl.ErrorMessage>
              </FormControl>
              <Text bold underline>
                Custom style for disable:
              </Text>
              <FormControl isDisabled>
                <FormControl.Label
                  _disabled={{
                    _text: {
                      color: "gray.400",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Favorite framework
                </FormControl.Label>
                <Input />
                <FormControl.HelperText
                  _disabled={{
                    borderLeftWidth: 1,
                    mt: 1,
                    px: 1,
                    pl: 2,
                    borderColor: "gray.400",
                  }}
                >
                  We'll keep this between us.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>
                  Something is wrong.
                </FormControl.ErrorMessage>
              </FormControl>
              <Text bold underline>
                Custom style for invalid:
              </Text>
              <FormControl isRequired isInvalid>
                <FormControl.Label
                  _invalid={{
                    _text: {
                      color: "rose.500",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Favorite framework
                </FormControl.Label>
                <Input />
                <FormControl.HelperText
                  _invalid={{
                    _text: {
                      color: "red.400",
                      underline: true,
                    },
                  }}
                >
                  We'll keep this between us.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>
                  Something is wrong.
                </FormControl.ErrorMessage>
              </FormControl>
            </Stack>
            {/* <Button
              onPress={toggleAddForm}
              size="lg"
              style={styles.cancelButton}
            >
              <View style={styles.buttonContent}>
                <FontAwesomeIcon icon={faBan} color="white" />
                <Text style={styles.buttonText}>Cancel</Text>
              </View>
            </Button> */}
          </Box>
        </Box>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: 100,
    backgroundColor: "white",
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    borderBottomColor: "lightgrey",
  },
  TextBody: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "blue",
  },
  cancelButton: {
    alignItems: "center",
    backgroundColor: "orange",
    width: 75,
    height: 40,
    borderRadius: 6,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
    alignItems: "center",
  },
});

export default Add;
