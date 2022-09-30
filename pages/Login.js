/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
// import {Input} from '@rneui/themed';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter Your phone Number" />
      <Text style={styles.text}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter Your Password"
      />
      <Text style={styles.text} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password ?</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Update-Address')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    background: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
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

export default Login;
