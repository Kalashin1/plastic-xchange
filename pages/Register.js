/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { baseUrl, storeUserData, color1, color5 } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false)

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('');

  handlePress = () => {
    navigation.navigate('Dashboard')
  }

  const createAccount = async () => {
    setUsernameError(false)
    setEmailError(false)
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
        const error = data.message;
        // handle error
        console.log(error);
        if (error.username) {
          setUsernameError(true)
        } else if (error.email) {
          setEmailError(true)
        }

      } else {
        const [user, token] = data.data;
        console.log(user);
        storeUserData(user._id, token);
        navigation.navigate('Login');
      }
    }
  }

  return (
    <ScrollView style={styles.scrollContainer}>
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
            showError={emailError}
            errorMessage="That email already exists"
          />
          <Input
            label="Username"
            defaultV={username}
            handleChange={setUsername}
            placeholder="JohnDoe1"
            showError={usernameError}
            errorMessage="That username already exists"
          />
          <Input
            label="password"
            defaultV={password}
            handleChange={setPassword}
            placeholder="*******"
            isPassword={true}
          />

          <Button label="Create Account" onPressHandler={() => createAccount()} />

          
        </View>
        <Text style={styles.loginTextParent}>
          Already have an account? 
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}
          > Login</Text>
        </Text>
        <Text 
          style={styles.linkText}
          onPress={() => navigation.navigate('Agent-Register')}
        >
          I am an agent
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff'
  },
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
