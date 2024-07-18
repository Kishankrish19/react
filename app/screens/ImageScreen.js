// app/screens/ImageScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ImageScreen;
