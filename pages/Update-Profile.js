/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import Input from '../components/Input';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import { baseUrl, retrieveData } from '../helper'

const data = [
  {label: 'User', value: 'USER'},
  {label: 'Agent', value: 'AGENT'},
];

const UpdateProfile = ({navigation}) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const updateBankInfo = async () => {
    const [id, err] = await retrieveData('userId');
    const [token, setToken] = await retrieveData('userToken');
    if (token && id) {
      const res = await fetch(`${baseUrl}/user/bankInfo/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ bank, accountNo })
      })

      if (res.ok) {
        const data = await res.json();

        if (data.error) {
          // handle Error
          // console.log(data.message)
        } else {
          // console.log(data.message);
          alert(data.message)
          navigation.navigate('Profile-Screen', { screen: 'Profile' });
        }
      }
    }
  }

  return (
    <View style={styles.container}>

      <View>
        <HeaderText text="Update Your Profile" />
      </View>
      <View>
        <Input 
          defaultV={name}
          label="Name"
          placeholder="John Doe"
          handleChange={setName}

        />

        <Input
          defaultV={phoneNumber}
          label="Phone Number"
          placeholder="0123456789"
          handleChange={setPhoneNumber}
        />

        <Button label="Update" onPressHandler={() => updateBankInfo()} />
      </View>
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
  }
});


export default UpdateProfile;
