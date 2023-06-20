import { StyleSheet, Text, View } from "react-native";
import TitleComponent from "./components/TitleComponent";

export default function App() {
  return (
      <View style={styles.container}>
        <TitleComponent />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
