import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToScanScreen = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Image Scanner</Text>
      <Text style={styles.subtitle}>Tap the button below to scan an image</Text>
      <Button title="Scan Image" onPress={navigateToScanScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
