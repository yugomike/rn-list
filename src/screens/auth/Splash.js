import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Button from '../../components/Button';
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find Here!</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  image: {
    width: '100%',
    height: 200,
  },

  titleContainer: {
    marginVertical: 54,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },

  footerText: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default Splash;
