// app/screens/MenuScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MenuScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About the App</Text>
      <Text style={styles.paragraph}>
        This app is designed to help users navigate through various features such as scanning, dictionary, images, and more. Each feature is crafted to provide a seamless experience for the users.
      </Text>
      
      <Text style={styles.heading}>Features</Text>
      <Text style={styles.paragraph}>
        - Home: The main dashboard of the app.{'\n'}
        - Scan: A feature to scan QR codes or barcodes.{'\n'}
        - Dictionary: A dictionary feature to look up words.{'\n'}
        - ToS: Terms of Service.{'\n'}
        - Image: A gallery of images.{'\n'}
        - Settings: Configure the app settings.{'\n'}
        - Profile: View and edit your profile.{'\n'}
      </Text>
      
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions or feedback, feel free to reach out to us.
      </Text>
      <Text style={styles.contact}>
        Email: support@appname.com
      </Text>
      <Text style={styles.contact}>
        Phone: +1-234-567-890
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  contact: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default MenuScreen;
