import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ScanScreen = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const pickImageHandler = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPickedImage({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImageHandler} />
      {pickedImage && <Image source={{ uri: pickedImage.uri }} style={styles.image} />}
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
  image: {
    width: '80%',
    height: 300,
    marginTop: 20,
    resizeMode: 'contain',
  },
});

export default ScanScreen;
