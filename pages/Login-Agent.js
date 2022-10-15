/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import { baseUrl, color5, storeUserData } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    console.log({ email, password, type: 'USER' })
    const res = await fetch(`${baseUrl}/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password, type: 'AGENT' })
    })

    if (res.ok) {
      const data = await res.json();

      if (data.error) {
        // handle error
        console.log(data.message)
      } else {
        // handle User
        const [user, token] = data.data
        console.log(user);
        await storeUserData(user._id, token);
        if (user.location.country !== null) {
          if (user.bankInfo.bank !== null ) {
            navigation.navigate('Dashboard');
          } else {
            navigation.navigate('Update-Bank');
          }
        } else {
          navigation.navigate('Update-Address');
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <HeaderText
        text="Login to your account"
      />
      <View>
        <Input
          placeholder="Enter Your Email"
          defaultV={email}
          label="Email"
          handleChange={setEmail}
        />
        <Input
          placeholder="********"
          defaultV={password}
          label="Password"
          handleChange={setPassword}
          isPassword={true}
        />
        <Text 
          style={styles.text}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot Password ?
        </Text>
        <Button
          label="Login"
          onPressHandler={login}
        />
      </View>
      <Text style={styles.loginTextParent}>
        Don't have an account?
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Agent-Register')}
        > Register</Text>
      </Text>
      <Text 
        style={styles.linkText}
        onPress={() => navigation.navigate('Login')}
      >I have a household</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'b',
  },
  linkText: {
    marginVertical: 20,
    color: color5,
    fontSize: 18
  },
  loginText: {
    color: color5,
    padding: 5,
  },
  loginTextParent: {
    marginTop: 20,
  },
});

export default Login;
