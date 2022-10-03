/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import DropdownComponent from '../components/Dropdown';
import { baseUrl, storeUserData } from '../helper';

const data = [
  {label: 'User', value: 'USER'},
  {label: 'Agent', value: 'AGENT'},
];

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Text>Create your account</Text>
      <View>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input} 
          placeholder="Enter Your Full Name"
          defaultValue={name}
          onChangeText={nv => setName(nv)}
        />

        <Text style={styles.text}>Username</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Your Username"
          defaultValue={username}
          onChangeText={nv => setUsername(nv)}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          defaultValue={email}
          onChangeText={nv => setEmail(nv)}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Your Password"
          defaultValue={password}
          onChangeText={nv => setPassword(nv)}
        />
        {/* <DropdownComponent data={data} /> */}
        <Button title="Register" onPress={() => createAccount()} />
      </View>
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
    borderWidth: 0.5,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'b',
  },
});


export default Register;
