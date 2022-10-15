/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import HeaderText from '../components/Header-Text';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <HeaderText
        text="Reset Your Password"
      />
      <Input
        label="Email"
        defaultV={email}
        handleChange={setEmail}
        placeholder="johndoe@gmail.com"
      />
      <Button
        label="Reset My Password"
        onPressHandler={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    background: 'maroon',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 2,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'b',
  },
});

export default ForgotPassword;
