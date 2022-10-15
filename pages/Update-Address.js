/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import HeaderText from '../components/Header-Text';
import Input from '../components/Input';
import Button from '../components/Button';
import DropdownComponent from '../components/Dropdown';
import { baseUrl, retrieveData } from '../helper';

const states = [
  {label: 'rivers', value: 'rivers'},
  {label: 'lagos', value: 'lagos'},
];

const lgas = [
  {label: 'ahoda', value: 'ahoda'},
  {label: 'ogidi', value: 'ogidi'},
];

const UpdateAddress = ({navigation}) => {

  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');

  const updateUserAddress = async () => {
    const [id, err] = await retrieveData('userId');
    const [token, tokenErr] = await retrieveData('userToken');
    // console.log(token, id)
    if (!err && !tokenErr) {
      const res = await fetch(`${baseUrl}/user/location/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ street, zip, state, lga, country: "Nigeria" })
      })
  
      if (res.ok) {
        const data = await res.json();
  
        if (data.error) {
          // TODO: handle errors
          console.log(data.message);
        } else {
          console.log(data.message);
          alert(data.message)
          navigation.navigate('Profile')
        }
      } else {
        console.log(await res.json())
      }
    }
  }

  return (
    <View style={styles.container}>
      
      <View>
        <HeaderText text="Update Address" />
      </View>

      <View>
      <Input
        label="Street"
        defaultV={street}
        handleChange={setStreet}
        placeholder="No 32 Worlu street"
      />

      <Input
        label="Zip code"
        defaultV={zip}
        handleChange={setZip}
        placeholder="123456"
      />

      <Text style={styles.text}>State</Text>
      <DropdownComponent 
        data={states} 
        value={state} 
        setValue={setState} 
      />

      <Text style={styles.text}>LGA</Text>
      <DropdownComponent 
        data={lgas} 
        value={lga} 
        setValue={setLga} 
      />

      <Button 
        label="Update Address" 
        onPressHandler={() => updateUserAddress()} 
      />
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
    marginHorizontal: 12,
    fontWeight: 'b',
  },
});


export default UpdateAddress;
