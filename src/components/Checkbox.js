import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      onPress={() => onCheck(!checked)}
      style={styles.container}
      activeOpacity={0.6}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../assets/checked.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },

  innerContainer: {
    backgroundColor: colors.grey,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIcon: {
    width: 12,
    height: 9,
  },
});

export default React.memo(Checkbox);
