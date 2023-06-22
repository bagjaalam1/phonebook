import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import TitleComponent from "./src/components/TitleComponent";
import Add from "./src/features/add/Add";
import Search from "./src/features/search/Search"
import ContactList from "./src/features/contactList/ContactList";

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>
      <SafeAreaProvider>
        <View>
          <TitleComponent />
        </View>
        <View>
          <Add />
        </View>
        <View>
          <Search />
        </View>
        <View>
          <ContactList />
        </View>
      </SafeAreaProvider>
      </ScrollView>
      
    </NativeBaseProvider>
  );
}
