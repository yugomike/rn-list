import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('../assets/auth_back.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 54,
  },

  image: {
    width: 18,
    height: 18,
  },

  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});


export default AuthHeader;
