import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import GoogleLogin from '../../components/GoogleLogin';

const SignIn = () => {
  const onSignIn = () => {};

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="*****" isPassword={true} />

      <Button style={styles.button} title="Sign In" />
      <Separator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.footerLink} onPress={onSignIn}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },

  button: {
    marginVertical: 20,
  },

  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: 'center',
  },

  footerLink: {
    fontWeight: 'bold',
  },
});

export default React.memo(SignIn);
