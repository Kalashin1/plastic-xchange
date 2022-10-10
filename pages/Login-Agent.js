/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import { baseUrl, storeUserData } from '../helper';
// import {Input} from '@rneui/themed';

const LoginAgent = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
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
            navigation.navigate('Profile');
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
      <Text>Login to your account</Text>
      <View>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        defaultValue={email}
        onChangeText={v => setEmail(v)}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        defaultValue={password}
        onChangeText={v => setPassword(v)}
        placeholder="Enter Your Password"
      />
      <Text 
        style={styles.text}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        Forgot Password ?
      </Text>
      <Button
        title="Login"
        onPress={() => login()}
      />
      </View>
      <View>
        <Text style={styles.loginTextParent}>
          Don't have an account?
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Agent-Register')}
          > Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'b',
  },
  loginText: {
    color: 'blue',
    paddingLeft: 5,
  },
  loginTextParent: {
    marginTop: 20,
    // backgroundColor: 'red',
    // padding: 15,
    // borderRadius: 10
  },
});

export default LoginAgent;