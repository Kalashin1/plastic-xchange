/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import { baseUrl, retrieveData } from '../helper'

const data = [
  {label: 'User', value: 'USER'},
  {label: 'Agent', value: 'AGENT'},
];

const UpdateBankInfo = ({navigation}) => {

  const [bank, setBank] = useState('');
  const [accountNo, setAccountNo] = useState('');

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
          console.log(data.message)
        } else {
          console.log(data.message);
          navigation.navigate('Update-Profile');
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Update Your Bank Info</Text>
      <View>
        <Text style={styles.text}>Bank</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Your Bank"
          defaultValue={bank}
          onChangeText={v => setBank(v)}
        />

        <Text style={styles.text}>Account Number</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Your Account Number"
          defaultValue={accountNo}
          onChangeText={v => setAccountNo(parseInt(v))}
        />

        <Button title="UpdateBankInfo" onPress={() => updateBankInfo()} />
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


export default UpdateBankInfo;
