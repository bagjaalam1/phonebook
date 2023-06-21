import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TitleComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>Phone Book Apps</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    left: 0,
    right: 0,
    top:0,
    position: 'absolute',
    shadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 16
  }
});

export default TitleComponent;