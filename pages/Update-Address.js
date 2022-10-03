/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
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
          navigation.navigate('Update-Bank')
        }
      } else {
        console.log(await res.json())
      }
    }
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Street</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter Your Street Address"
        defaultValue={street}
        onChangeText={v => setStreet(v)}
      />

      <Text style={styles.text}>Zip Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Zip code"
        defaultValue={zip}
        onChangeText={v => setZip(v)}
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
        title="Register" 
        onPress={() => updateUserAddress()} 
      />
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


export default UpdateAddress;
