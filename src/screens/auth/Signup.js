import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import GoogleLogin from '../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {

  }

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="*****" isPassword={true} />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with{' '}
          <Text style={{ fontWeight: '500' }}>Terms & Privacy</Text>
        </Text>
      </View>

      <Button style={styles.button} title="Sign up" />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have account?{' '}
        <Text style={styles.footerLink} onPress={onSignIn}>
          Sign In
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

export default React.memo(Signup);
