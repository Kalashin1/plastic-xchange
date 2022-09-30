/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
// import {Input} from '@rneui/themed';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter Your Email" />
      <Button
        title="Reset My Password"
        onPress={() => navigation.navigate('Login')}
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
