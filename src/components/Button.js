import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
  },

  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default React.memo(Button);
