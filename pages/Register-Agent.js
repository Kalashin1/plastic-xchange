/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { baseUrl, storeUserData, color1, color5 } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handlePress = () => {
    navigation.navigate('Dashboard')
  }

  const createAccount = async () => {
    const res = await fetch(`${baseUrl}/create-account`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name, email, username, password, type: 'USER' })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.error) {
        const error = data.error;
        // handle error
        console.log(error);
      } else {
        const [user, token] = data.data;
        console.log(user);
        storeUserData(user._id, token);
        navigation.navigate('Login');
      }
    }
  }

  return (
    <View style={styles.container}>
      <HeaderText text="Create your account" />
      <View>
        <Input
          label="Full Name"
          defaultV={name}
          handleChange={setName}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          defaultV={email}
          handleChange={setEmail}
          placeholder="johndoe@gmail.com"
        />
        <Input
          label="password"
          defaultV={password}
          handleChange={setPassword}
          placeholder="*******"
        />

       <Button label="Create Account" onPressHandler={() => console.log("Hello world")} />

        
      </View>
      <Text style={styles.loginTextParent}>
        Already have an account? 
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Agent-Login')}
        > Login</Text>
      </Text>
      <Text 
        style={styles.linkText}
        onPress={() => navigation.navigate('Register')}
      >
        I have a household
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 5,
    fontWeight: 'b',
  },
  linkText: {
    marginVertical: 20,
    fontSize: 16,
  },
  loginText: {
    color: color5,
    paddingLeft: 5,
    fontWeight: 'bold', 
  },
  loginTextParent: {
    marginTop: 20,
  },
});


export default Register;
