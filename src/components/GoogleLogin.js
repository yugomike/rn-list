import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/colors';

const GoogleLogin = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 30
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default GoogleLogin;
