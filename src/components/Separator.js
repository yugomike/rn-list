import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

const Separator = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    backgroundColor: colors.lightGrey,
    height: 1,
    flex: 1,
  },

  text: {
    color: colors.blue,
    fontWeight: '500',
    marginHorizontal: 10,
  },
});

export default React.memo(Separator);
