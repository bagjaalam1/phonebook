import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";

const contactList = () => {
  const data = [
    { name: "Radhika", phone: "Dosa", action: "23" },
    { name: "Krishna", phone: "Uttapam", action: "26" },
    { name: "Vanshika", phone: "Brownie", action: "20" },
    { name: "Teena", phone: "Pizza", action: "24" },
    { name: "Radhika", phone: "Dosa", action: "23" },
    { name: "Krishna", phone: "Uttapam", action: "26" },
    { name: "Vanshika", phone: "Brownie", action: "20" },
    { name: "Teena", phone: "Pizza", action: "24" },
    { name: "Radhika", phone: "Dosa", action: "23" },
    { name: "Krishna", phone: "Uttapam", action: "26" },
    { name: "Vanshika", phone: "Brownie", action: "20" },
    { name: "Teena", phone: "Pizza", action: "24" },
  ];

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Phone</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
      </DataTable.Header>
      {data.map((item, index) => (
        <DataTable.Row
          key={index}
          style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
        >
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.phone}</DataTable.Cell>
          <DataTable.Cell>{item.action}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
    borderTopColor: "grey",
  },
  oddRow: {
    backgroundColor: "#fff",
    borderTopColor: "grey",
    borderBottomWidth: 0
  },
});

export default contactList;
