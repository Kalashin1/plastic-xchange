/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import DropdownComponent from '../components/Dropdown';

const state = [
  {label: 'rivers', value: 'rivers'},
  {label: 'lagos', value: 'lagos'},
];

const lga = [
  {label: 'ahoda', value: 'ahoda'},
  {label: 'ogidi', value: 'ogidi'},
];

const UpdateAddress = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Street</Text>
      <TextInput style={styles.input} placeholder="Enter Your Street Address" />
      <Text style={styles.text}>Zip Code</Text>
      <TextInput style={styles.input} placeholder="Enter Your Zip code" />
      <Text style={styles.text}>State</Text>
      <DropdownComponent data={state} />
      <Text style={styles.text}>LGA</Text>
      <DropdownComponent data={lga} />
      <Button title="Register" onPress={() => navigation.navigate('Upload-Plastic')} />
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
