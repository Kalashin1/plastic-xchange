/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import { baseUrl, color5, storeUserData } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const _Error = {
  email: "No user with that email",
  password: "Incorrect password"
}

const Signin = ({navigation}) => {

  const [email, setEmail] = useState('');

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false)

  const [type, setType] = useState('USER')

  let userType = "USER";

  const login = async () => {
    // console.log({ email, password, type: 'USER' })
    const res = await fetch(`${baseUrl}/signin`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, username, type: userType })
    })

    if (res.ok) {
      const data = await res.json();

      console.log(data)

      if (data.error) {
        const error = data.message
        console.log(error)
        
      } else {
        // handle User
        const [user, token] = data.data
        console.log(user);
        await storeUserData(user._id, token);
        navigation.navigate('Auth-Screen', { screen: 'otp' });
      }
    }
  }

  return (
    <View style={styles.container}>
      <HeaderText
        text="Signin to your account"
      />
      <View>
      {/* <Icon name="rocket" size={30} color="#900" /> */}
        <Input
          placeholder="Johndoe@gmail.com"
          defaultV={email}
          label="Email"
          handleChange={setEmail}
        />
        <Input
          label="Username"
          defaultV={username}
          handleChange={setUsername}
          placeholder="JohnDoe1"
          showError={usernameError}
          errorMessage="That username already exists"
        />
       
        <Button
          label="Sign in"
          onPressHandler={login}
        />
      </View>
      <Text 
        style={styles.loginTextParent}
        onPress={() => navigation.navigate('Auth-Screen', { screen: 'Register' })}
      >
        Don't have an account?
        <Text style={styles.loginText}> Register</Text>
      </Text>
      { type == "USER" ? 
        (
          <Text 
            style={styles.linkText}
            onPress={() => { setType('AGENT') }}
          >
            I am an { type.toLowerCase()}
          </Text>
        ) : 
        (
          <Text 
           style={styles.linkText}
           onPress={() => { setType('AGENT') }}
         >
          I am an { type.toLowerCase()}
          </Text>
        )
      }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 5,
    fontFamily: 'Lato-Regular',
  },
  linkText: {
    marginVertical: 20,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  loginText: {
    color: color5,
    padding: 5,
    fontFamily: 'Lato-Bold',
  },
  loginTextParent: {
    marginTop: 20,
    fontFamily: 'Lato-Bold',
  },
});

export default Signin;
