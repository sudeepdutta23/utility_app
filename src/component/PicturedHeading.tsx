import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const PicturedHeading = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Placeholder for the illustration */}
      <Image
        source={require('../../assets/loginBackground.webp')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 420,
    height: 200,
  },
});
