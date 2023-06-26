import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
  selectContacts,
  updateContact,
} from "./ContactListSlice";
import { Button, KeyboardAvoidingView } from "native-base";
import {
  faTrash,
  faPen,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Input } from "native-base";

const contactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [indexClick, setIndexClick] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditPress = (item) => {
    setEditingMode(true);
    setIndexClick(item.id);
    setName(item.name);
    setPhone(item.phone);
  };

  const handleSavePress = (id) => {
    setEditingMode(false);
    dispatch(updateContact({ id, name, phone }));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView horizontal>
        <DataTable style={styles.container}>
          <DataTable.Header>
            <DataTable.Title style={styles.tableAdjust}>#</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Phone</DataTable.Title>
            <DataTable.Title>Action</DataTable.Title>
          </DataTable.Header>
          {contacts.map((item, index) => (
            <DataTable.Row
              key={item.id}
              style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              <DataTable.Cell style={styles.tableAdjust}>
                {index + 1}
              </DataTable.Cell>
              <DataTable.Cell >
                {editingMode && indexClick === item.id ? (
                  <View alignItems="center">
                    <Input
                      value={name}
                      onChangeText={(value) => {
                        setName(value);
                      }}
                    ></Input>
                  </View>
                ) : (
                  <Text>{item.name}</Text>
                )}
              </DataTable.Cell>
              <DataTable.Cell>
                {editingMode && indexClick === item.id ? (
                  <View alignItems="center">
                    <Input
                      value={phone}
                      onChangeText={(value) => {
                        setPhone(value);
                      }}
                    ></Input>
                  </View>
                ) : (
                  item.phone
                )}
              </DataTable.Cell>
              <DataTable.Cell>
                {editingMode && indexClick === item.id ? (
                  <View>
                    <Button
                      colorScheme={"green"}
                      onPress={() => {
                        handleSavePress(item.id);
                      }}
                    >
                      <View style={styles.buttonContent}>
                        <FontAwesomeIcon icon={faCheckCircle} color="white" />
                        <Text style={styles.buttonText}>Save</Text>
                      </View>
                    </Button>
                  </View>
                ) : (
                  <View style={styles.columnButtonContainer}>
                    <Button
                      colorScheme={"green"}
                      onPress={() => handleEditPress(item)}
                    >
                      <View style={styles.buttonContent}>
                        <FontAwesomeIcon icon={faPen} color="white" />
                      </View>
                    </Button>
                    <Button colorScheme={"red"} onPress={()=>{dispatch(deleteContact({id: item.id}))}}>
                      <FontAwesomeIcon icon={faTrash} color={"white"} />
                    </Button>
                  </View>
                )}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: 500,
  },
  tableAdjust: {
    marginRight: -100,
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
    borderTopColor: "grey",
  },
  oddRow: {
    backgroundColor: "#fff",
    borderTopColor: "grey",
    borderBottomWidth: 0,
  },
  editButton: {
    backgroundColor: "green",
  },
  deleteButton: {
    backgroundColor: "red",
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
  columnButtonContainer: {
    flexDirection: "row",
  },
  cek1: {
    backgroundColor: "red",
  },
  cek2: {
    backgroundColor: "blue",
  },
  inputTable: {
    backgroundColor: "white"
  }
});

export default contactList;
